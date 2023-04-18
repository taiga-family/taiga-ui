import {RawLoaderContent} from '@taiga-ui/addon-doc/interfaces';

export async function tuiRawLoad(content: RawLoaderContent): Promise<string> {
    return content instanceof Promise ? (await content).default : content;
}
