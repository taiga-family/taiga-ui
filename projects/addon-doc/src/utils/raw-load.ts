import {RawLoaderContent} from '../interfaces/page';

export async function tuiRawLoad(content: RawLoaderContent): Promise<string> {
    return content instanceof Promise ? (await content).default : content;
}
