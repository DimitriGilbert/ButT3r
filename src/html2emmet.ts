import { JSDOM } from "jsdom";

export function htmlStringToEmmet(html: string): string {
  const wrapper = new JSDOM(`<div>${html}</div>`);
  const element = wrapper.window.document.querySelector("div");
  if (!element) return "";
  return processElement(element);
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
  const tag = element.tagName.toLowerCase();
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
      // Handle boolean attributes
      const value = attr.value === "" ? attr.name : `="${attr.value}"`;
      return `${attr.name}${value}`;
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
