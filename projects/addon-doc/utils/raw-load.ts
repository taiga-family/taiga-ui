import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';

export async function tuiRawLoad(content: TuiRawLoaderContent): Promise<string> {
    return content instanceof Promise ? (await content).default : content;
}
