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
 * e.g. `[foo]="old"` → `[foo]="new"`, independent of the quote style (single/double) and
 * any spacing around `=`. A value-less attribute (e.g. `tuiTextfield`) is returned as-is.
 *
 * Prefer this over `attrText.replace(`="${old}"`, …)`, which silently no-ops when the
 * source used single quotes or spaced the `=`.
 */
export function replaceAttrValue(attrText: string, value: string): string {
    return attrText.replace(
        /(=\s*)(['"])[\s\S]*\2$/,
        (_match, eq: string, quote: string) => `${eq}${quote}${value}${quote}`,
    );
}
