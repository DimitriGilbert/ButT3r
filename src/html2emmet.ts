import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

export function htmlStringToEmmet(jsx: string): string {
  try {
    // Parse the JSX as JavaScript
    const ast = parse(jsx, {
      sourceType: 'module',
      plugins: ['jsx']
    });

    let emmet = '';

    traverse(ast, {
      JSXElement(path: NodePath<t.JSXElement>) {
        emmet = processJSXElement(path.node);
        path.stop(); // Stop after processing the first JSX element
      }
    });

    return emmet;
  } catch (e) {
    console.error("Failed to parse JSX:", e);
    return "";
  }
}

function processJSXElement(element: t.JSXElement): string {
  const openingElement = element.openingElement;
  let abbreviation = getJSXElementAbbreviation(openingElement);

  const children = element.children.filter(child => 
    t.isJSXElement(child) || 
    (t.isJSXText(child) && child.value.trim())
  );

  if (children.length > 0) {
    const childAbbrevs = children.map(child => {
      if (t.isJSXText(child)) {
        return `{${child.value.trim()}}`;
      }
      if (t.isJSXElement(child)) {
        return processJSXElement(child);
      }
      return null;
    }).filter(Boolean).join('+');

    // Only add parentheses for multiple children or mixed content
    const needsGroup = children.length > 1 || 
                      children.some(child => t.isJSXText(child)) ||
                      children.some(c => t.isJSXElement(c) && c.children.length > 0);

    abbreviation += needsGroup ? `>(${childAbbrevs})` : `>${childAbbrevs}`;
  }

  return abbreviation;
}

function getJSXElementAbbreviation(openingElement: t.JSXOpeningElement): string {
  const tagName = openingElement.name;
  let abbreviation = '';

  if (t.isJSXIdentifier(tagName)) {
    abbreviation = tagName.name;
  }

  // Handle attributes
  const attributes = openingElement.attributes
    .filter((attr): attr is t.JSXAttribute => t.isJSXAttribute(attr))
    .map(processJSXAttribute)
    .filter(Boolean)
    .join(' ');

  if (attributes) {
    abbreviation += `[${attributes}]`;
  }

  return abbreviation;
}

function processJSXAttribute(attr: t.JSXAttribute): string | null {
  if (!t.isJSXIdentifier(attr.name)) return null;

  const name = attr.name.name;
  
  if (!attr.value) {
    // Boolean attribute
    return name;
  }

  if (t.isStringLiteral(attr.value)) {
    // Handle string literals
    return `${name}="${attr.value.value}"`;
  }

  if (t.isJSXExpressionContainer(attr.value)) {
    // Handle numeric literals and other expressions
    if (t.isNumericLiteral(attr.value.expression) || t.isStringLiteral(attr.value.expression)) {
      return `${name}={${attr.value.expression.value}}`;
    }
    if (t.isIdentifier(attr.value.expression)) {
      return `${name}={${attr.value.expression.name}}`;
    }
    // For other expressions, convert to string without curly braces
    return `${name}={${JSON.stringify(attr.value.expression)}}`;
  }

  return null;
}

export function htmlToEmmet(element: Element): string {
  return processElement(element);
}

export function processElement(element: Element): string {
  let abbreviation = getElementAbbreviation(element);
  const textContent = getTextContent(element);
  const children = Array.from(element.children);

  if (textContent) {
    abbreviation += `{${textContent}}`;
  }

  if (children.length > 0) {
    const childrenAbbrev = processChildren(element);
    if (childrenAbbrev) {
      abbreviation += `>${childrenAbbrev}`;
    }
  }

  return abbreviation;
}

export function getElementAbbreviation(element: Element): string {
  const tag = element.tagName;
  const id = element.id ? `#${element.id}` : "";
  const classes =
    element.classList.length > 0
      ? `.${Array.from(element.classList).join(".")}`
      : "";
  const otherAttributes = getOtherAttributes(element);

  let abbreviation = "";
  if (tag === "div" && (id || classes)) {
    abbreviation = `${id}${classes}`;
  } else {
    abbreviation = tag + id + classes;
  }

  if (otherAttributes) {
    abbreviation += `[${otherAttributes}]`;
  }

  return abbreviation;
}

export function getOtherAttributes(element: Element): string {
  return Array.from(element.attributes)
    .filter((attr) => attr.name !== "id" && attr.name !== "class")
    .map((attr) => {
      // Handle special cases
      if (attr.name === "asChild" && attr.value === "true") {
        return "asChild";
      }
      if (attr.name.startsWith("data-jsx")) {
        return `{${attr.value}}`;
      }
      // Normal attributes
      if (attr.value === "") {
        return `${attr.name}="${attr.name}"`;
      }
      return `${attr.name}="${attr.value}"`;
    })
    .join(" ");
}

export function getTextContent(element: Element): string | null {
  const hasChildElements = element.children.length > 0;
  if (hasChildElements) return null;
  const text = element.textContent?.trim();
  return text || null;
}

export function processChildren(element: Element): string {
  const children = Array.from(element.children);
  if (children.length === 0) return "";

  // Group multiple children with parentheses
  const childrenStr = children.map(child => processElement(child)).join('+');
  return children.length > 1 ? `(${childrenStr})` : childrenStr;
}
