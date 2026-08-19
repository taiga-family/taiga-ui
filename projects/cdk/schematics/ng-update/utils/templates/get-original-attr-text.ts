import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

// Slices the attribute from source, preserving camelCase that parse5 lowercases in the AST.
export function getOriginalAttrText(
    template: string,
    element: Element,
    attr: {name: string; value: string},
): string {
    const attrLocation = element.sourceCodeLocation?.attrs?.[attr.name.toLowerCase()];

    if (attrLocation) {
        return template.slice(attrLocation.startOffset, attrLocation.endOffset);
    }

    return attr.value ? `${attr.name}="${attr.value}"` : attr.name;
}

// Replaces an attribute's value regardless of quote style (single/double/none).
export function replaceAttrValue(attrText: string, value: string): string {
    const eqIndex = attrText.indexOf('=');

    if (eqIndex === -1) {
        return attrText;
    }

    const afterEq = attrText.slice(eqIndex + 1);
    const leadingWs = /^\s*/.exec(afterEq)?.[0] ?? '';
    const rest = afterEq.slice(leadingWs.length);
    const trailingWs = /\s*$/.exec(rest)?.[0] ?? '';
    const core = rest.slice(0, rest.length - trailingWs.length);
    const firstChar = core.charAt(0);
    const quote = firstChar === '"' || firstChar === "'" ? firstChar : '"';

    return `${attrText.slice(0, eqIndex)}=${leadingWs}${quote}${value}${quote}${trailingWs}`;
}
