import {TuiDocExample} from '../interfaces/page';
import {rawLoad} from './raw-load';

/**
 * @deprecated: use {@link tuiRawLoadRecord} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export async function rawLoadRecord(
    example: TuiDocExample,
): Promise<Record<string, string>> {
    const processedContent: Record<string, string> = {};

    for (const [key, content] of Object.entries(example)) {
        if (content) {
            processedContent[key] = await rawLoad(content);
        }
    }

    return processedContent;
}

export const tuiRawLoadRecord = rawLoadRecord;
