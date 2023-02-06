import {Attribute} from '@tiptap/core';

export function tuiParseNodeAttributes(
    attrs: string[],
): Record<string, Partial<Attribute>> {
    return attrs.reduce((result, attribute) => {
        result[attribute] = {
            parseHTML: element => element?.getAttribute(`${attribute}`),
        };

        return result;
    }, {} as Record<string, Partial<Attribute>>);
}
