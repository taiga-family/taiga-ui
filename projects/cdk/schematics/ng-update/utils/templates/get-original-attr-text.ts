import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

/**
 * Returns the attribute exactly as written in the source template
 * (e.g. `[formControlName]="control"`), preserving name casing, quotes and spacing.
 *
 * parse5 lowercases attribute names in the parsed AST, so reconstructing an attribute
 * from `attr.name` loses camelCase (`[formControlName]` → `[formcontrolname]`). Slicing
 * the original source by its recorded offsets avoids that whole class of bug.
 *
 * When source location info is unavailable, falls back to reconstructing the attribute
 * from `attr.name`/`attr.value` so the value is never dropped (only the casing is lost).
 */
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

/**
 * Replaces the value inside an attribute string (as produced by `getOriginalAttrText`),
 * e.g. `[foo]="old"` → `[foo]="new"`. Handles single, double and missing quotes, spacing
 * around `=`, and trailing whitespace. Unquoted values are re-emitted with double quotes;
 * a value-less attribute (e.g. `tuiTextfield`) is returned as-is.
 *
 * Prefer this over `attrText.replace(`="${old}"`, …)`, which silently no-ops when the
 * source used single quotes, an unquoted value or spacing around `=`.
 */
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
