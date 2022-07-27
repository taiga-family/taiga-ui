import {JSONContent} from '@tiptap/core';

/**
 * @deprecated: use {@link tuiIsEmptyParagraph} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isEmptyParagraph(json?: JSONContent[]): boolean {
    return Array.isArray(json) && json.length === 1 && !json[0].hasOwnProperty(`content`);
}

export const tuiIsEmptyParagraph = isEmptyParagraph;
