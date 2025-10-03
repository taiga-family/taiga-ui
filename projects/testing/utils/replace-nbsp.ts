import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

export function tuiReplaceNbsp(content?: string): string {
    return content?.replaceAll(new RegExp(CHAR_NO_BREAK_SPACE, 'g'), ' ') ?? '';
}
