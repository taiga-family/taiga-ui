import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';

export async function tuiRawLoad(content: TuiRawLoaderContent): Promise<string> {
    return Promise.resolve(content).then((x) =>
        typeof x === 'object' && 'default' in x ? String(x.default) : x,
    );
}
