import type {TuiDocExample} from '@taiga-ui/addon-doc/interfaces';

import {tuiRawLoad} from './raw-load';

export async function tuiRawLoadRecord(
    example: TuiDocExample,
): Promise<Record<string, string>> {
    const processedContent: Record<string, string> = {};

    await Promise.all(
        Object.entries(example).map(async ([key, content]) => {
            if (content) {
                processedContent[key] = await tuiRawLoad(content);
            }
        }),
    );

    return processedContent;
}
