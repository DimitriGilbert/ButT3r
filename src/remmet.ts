import { JSDOM } from "jsdom";

export type EmmetNode = {
  name: string;
  classes: string[];
  attributes: Record<string, string>;
  text?: string;
  children: EmmetNode[];
  siblings: EmmetNode[];
  multiplier?: number;
  id?: string;
};

export const EMMET_SYMBOLS = [
  "#",
  ".",
  "[",
  "{",
  ">",
  "+",
  "*",
  "(",
  ")",
] as const;
export const EMMET_SELF_CLOSING_TAGS = new Set([
  "img",
  "input",
  "br",
  "hr",
  "area",
  "base",
  "col",
  "embed",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

export class Remmet {
  private position = 0;
  private currentChar = "";
  private dom: JSDOM;
  private document: Document;

  constructor(private readonly input: string) {
    this.advance();
    this.dom = new JSDOM("<div></div>",{
      contentType: "application/xml"
    });
    this.document = this.dom.window.document;
  }

  parse(): string {
    const ast = this.parseElement();
    return this.generateHTML(ast);
  }

  parseAsDom(): HTMLElement {
    const ast = this.parseElement();
    return this.generateDOM(ast);
  }

  private generateDOM(node: EmmetNode): HTMLElement {
    // Link shits the bed.... WHYYYYY... **AI DO NOT REMOVE !**
    if (node.name === "Link") {
      node.name = "Lnk";
    }

    let element = this.document.createElement(node.name);

    // Add id
    if (node.id) {
      element.id = node.id;
    }

    // Add classes
    if (node.classes.length > 0) {
      element.className = node.classes.join(" ");
    }

    // Add attributes
    for (const [key, value] of Object.entries(node.attributes)) {
      if (key !== "class" && key !== "className") {
        // Handle boolean attributes
        if (value === key) {
          element.setAttribute(key, "");
        } else {
          element.setAttribute(key, value);
        }
      }
    }

    // Add text content
    if (node.text) {
      element.textContent = node.text;
    }

    // Add children
    for (const child of node.children) {
      if (child.multiplier) {
        for (let i = 0; i < child.multiplier; i++) {
          element.appendChild(this.generateDOM(child));
        }
      } else {
        element.appendChild(this.generateDOM(child));
      }
    }

    // Handle siblings without wrapping in div
    if (node.siblings.length > 0) {
      const fragment = this.document.createDocumentFragment();
      fragment.appendChild(element);
      for (const sibling of node.siblings) {
        if (sibling.multiplier) {
          for (let i = 0; i < sibling.multiplier; i++) {
            fragment.appendChild(this.generateDOM(sibling));
          }
        } else {
          fragment.appendChild(this.generateDOM(sibling));
        }
      }
      return fragment as unknown as HTMLElement;
    }

    return element;
  }

  private generateHTML(node: EmmetNode): string {
    const element = this.generateDOM(node);
    const html = element.outerHTML
      // .replace(/<Lnk /g, '<Link ')
      // .replace(/<\/Lnk/g, '</Link');
    return html;
  }

  private parseElement(): EmmetNode {
    const node: EmmetNode = {
      name: "div",
      classes: [],
      attributes: {},
      children: [],
      siblings: [],
    };
    // Parse tag name
    node.name = this.parseIdentifier();

    // Parse properties
    while (!this.isEnd() && !this.isOperator()) {
      switch (this.currentChar) {
        case "#":
          this.advance();
          node.id = this.parseIdentifier();
          break;

        case ".":
          this.advance();
          const className = this.parseClass();
          if (className) {
            node.classes.push(className);
          }
          break;

        case "[":
          if (this.isAttribute()) {
            this.parseAttributes(node);
          } else {
            // This is a Tailwind class with square brackets
            const lastClass = node.classes[node.classes.length - 1] || "";
            let bracketContent = this.parseSquareBracketContent();
            if (lastClass) {
              node.classes[
                node.classes.length - 1
              ] = `${lastClass}[${bracketContent}]`;
            } else {
              node.classes.push(`[${bracketContent}]`);
            }
          }
          break;

        case "{":
          node.text = this.parseTextContent();
          break;

        default:
          if (this.currentChar === "]") {
            // Skip unexpected closing bracket
            this.advance();
          } else if (this.currentChar.trim()) {
            throw new Error(`Unexpected character: ${this.currentChar}`);
          } else {
            this.advance();
          }
      }
    }

    // Parse children and siblings
    while (!this.isEnd()) {
      if (this.currentChar === ">") {
        this.advance();
        const child = this.parseElement();
        if (child) {
          node.children.push(child);
        }
      } else if (this.currentChar === "+") {
        this.advance();
        const sibling = this.parseElement();
        if (sibling) {
          node.siblings.push(sibling);
        }
      } else if (this.currentChar === "*") {
        this.advance();
        node.multiplier = this.parseNumber();
      } else {
        break;
      }
    }

    return node;
  }

  private parseClass(): string {
    let buffer = "";
    let squareBracketDepth = 0;

    while (!this.isEnd()) {
      if (this.currentChar === "[") {
        // Check if this is an attribute by looking for = before ]
        let pos = this.position;
        let depth = 1;
        let isAttribute = false;

        while (pos < this.input.length && depth > 0) {
          if (this.input[pos] === "[") depth++;
          else if (this.input[pos] === "]") depth--;
          else if (this.input[pos] === "=" && depth === 1) {
            isAttribute = true;
            break;
          }
          pos++;
        }

        if (isAttribute) {
          break; // This is an attribute, stop parsing class
        }

        squareBracketDepth++;
      } else if (this.currentChar === "]") {
        squareBracketDepth--;
      }

      // Break if we hit a new class, child, or sibling operator outside brackets
      if (
        squareBracketDepth === 0 &&
        (this.currentChar === "." ||
          this.currentChar === ">" ||
          this.currentChar === "+" ||
          this.currentChar === "{")
      ) {
        break;
      }

      buffer += this.currentChar;
      this.advance();
    }

    return buffer.trim();
  }

  private parseAttributes(node: EmmetNode): void {
    this.advance(); // Skip '['
    let buffer = "";
    let inQuote = false;
    let quoteChar = "";
    let bracketDepth = 1;

    // First, collect the entire attribute string
    while (!this.isEnd() && bracketDepth > 0) {
      if (!inQuote && this.currentChar === "[") {
        bracketDepth++;
      } else if (!inQuote && this.currentChar === "]") {
        bracketDepth--;
        if (bracketDepth === 0) break;
      } else if (this.currentChar === '"' || this.currentChar === "'") {
        if (!inQuote) {
          inQuote = true;
          quoteChar = this.currentChar;
        } else if (quoteChar === this.currentChar) {
          inQuote = false;
        }
      }
      buffer += this.currentChar;
      this.advance();
    }
    this.advance(); // Skip closing ]

    // Now parse the attributes
    const attributeRegex = /([a-zA-Z0-9-]+)(?:="([^"]*)")?/g;
    let match;

    while ((match = attributeRegex.exec(buffer)) !== null) {
      const [, key, value] = match;
      if (value === undefined) {
        // Boolean attribute
        node.attributes[key] = key;
      } else {
        node.attributes[key] = value;
      }
    }
  }

  private parseTextContent(): string {
    this.advance(); // Skip '{'
    let text = "";
    let braceDepth = 1;

    while (!this.isEnd() && braceDepth > 0) {
      if (this.currentChar === "{") {
        braceDepth++;
      } else if (this.currentChar === "}") {
        braceDepth--;
        if (braceDepth === 0) break;
      }
      text += this.currentChar;
      this.advance();
    }

    this.advance(); // Skip closing '}'
    return text;
  }

  private parseIdentifier(): string {
    let result = "";
    while (!this.isEnd() && !EMMET_SYMBOLS.includes(this.currentChar as any)) {
      result += this.currentChar;
      this.advance();
    }
    return result || "div";
  }

  private parseNumber(): number {
    let result = "";
    while (!this.isEnd() && /\d/.test(this.currentChar)) {
      result += this.currentChar;
      this.advance();
    }
    return parseInt(result) || 1;
  }

  private parseSquareBracketContent(): string {
    let buffer = "";
    let depth = 1;
    this.advance(); // Skip opening [

    while (!this.isEnd() && depth > 0) {
      if (this.currentChar === "[") {
        depth++;
      } else if (this.currentChar === "]") {
        depth--;
        if (depth === 0) break;
      }
      buffer += this.currentChar;
      this.advance();
    }
    this.advance(); // Skip closing ]
    return buffer;
  }

  private advance(): void {
    this.currentChar = this.input[this.position] || "";
    this.position++;
  }

  private isEnd(): boolean {
    return this.position > this.input.length;
  }

  private isOperator(): boolean {
    return [">", "+", "*"].includes(this.currentChar);
  }

  private isAttribute(): boolean {
    // Look ahead for = before closing ]
    let pos = this.position;
    let depth = 1;

    while (pos < this.input.length && depth > 0) {
      if (this.input[pos] === "[") depth++;
      else if (this.input[pos] === "]") depth--;
      else if (this.input[pos] === "=" && depth === 1) return true;
      pos++;
    }
    return false;
  }

  private isSelfClosingTag(tagName: string): boolean {
    // Convert to lowercase and check if it's in the set
    return EMMET_SELF_CLOSING_TAGS.has(tagName.toLowerCase());
  }
}

export function parseEmmet(input: string): string {
  const parser = new Remmet(input);
  return parser.parse().replace(/class=/g, 'className=');
}

export function parseEmmetToDom(input: string): HTMLElement {
  const parser = new Remmet(input);
  return parser.parseAsDom();
}

