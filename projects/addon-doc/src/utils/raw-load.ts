import {RawLoaderContent} from '../interfaces/page';

/**
 * @deprecated: use {@link tuiRawLoad} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export async function rawLoad(content: RawLoaderContent): Promise<string> {
    return content instanceof Promise ? (await content).default : content;
}

export const tuiRawLoad = rawLoad;
