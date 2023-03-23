import type {TuiDocExample} from '../interfaces/page';
import {tuiRawLoad} from './raw-load';

export async function tuiRawLoadRecord(
    example: TuiDocExample,
): Promise<Record<string, string>> {
    const processedContent: Record<string, string> = {};

    for (const [key, content] of Object.entries(example)) {
        if (content) {
            processedContent[key] = await tuiRawLoad(content);
        }
    }

    return processedContent;
}
