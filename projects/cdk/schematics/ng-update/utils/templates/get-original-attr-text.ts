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
 * `attrNameLower` must be the lowercased name — that is how parse5 keys `attrs`.
 */
export function getOriginalAttrText(
    template: string,
    element: Element,
    attrNameLower: string,
): string | null {
    const attrLocation = element.sourceCodeLocation?.attrs?.[attrNameLower];

    return attrLocation
        ? template.slice(attrLocation.startOffset, attrLocation.endOffset)
        : null;
}
