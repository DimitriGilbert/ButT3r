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

  // Handle text content
  const textChild = element.children.find((node): node is t.JSXText => t.isJSXText(node));
  if (textChild) {
    const text = textChild.value.trim();
    if (text) {
      abbreviation += `{${text}}`;
    }
  }

  // Handle children
  const children = element.children.filter((child): child is t.JSXElement => t.isJSXElement(child));
  if (children.length > 0) {
    abbreviation += '>' + children.map(processJSXElement).join('+');
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
    return `${name}="${attr.value.value}"`;
  }

  if (t.isJSXExpressionContainer(attr.value)) {
    return `${name}={${attr.value.expression}}`;
  }

  return null;
}

export function htmlToEmmet(element: Element): string {
  return processElement(element);
}

export function processElement(element: Element): string {
  let abbreviation = getElementAbbreviation(element);
  const textContent = getTextContent(element);

  if (textContent) {
    abbreviation += `{${textContent}}`;
  }

  const childrenAbbreviation = processChildren(element);
  if (childrenAbbreviation) {
    abbreviation += `>${childrenAbbreviation}`;
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

  const groups: Array<{ abbreviation: string; count: number }> = [];
  let currentGroup: { abbreviation: string; count: number } | null = null;

  for (const child of children) {
    const childAbbrev = processElement(child);
    if (currentGroup && currentGroup.abbreviation === childAbbrev) {
      currentGroup.count++;
    } else {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = { abbreviation: childAbbrev, count: 1 };
    }
  }

  if (currentGroup) groups.push(currentGroup);

  return groups
    .map((group) =>
      group.count > 1
        ? `${group.abbreviation}*${group.count}`
        : group.abbreviation
    )
    .join("+");
}
