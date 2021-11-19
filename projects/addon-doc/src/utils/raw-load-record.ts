import {TuiDocExample} from '../interfaces/page';
import {rawLoad} from './raw-load';

export async function rawLoadRecord(
    example: TuiDocExample,
): Promise<Record<string, string>> {
    const processedContent: Record<string, string> = {};

    for (const [key, content] of Object.entries(example)) {
        processedContent[key] = await rawLoad(content);
    }

    return processedContent;
}
