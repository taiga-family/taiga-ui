import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

export function tuiReplaceNbsp(content?: string): string {
    return content?.replace(new RegExp(CHAR_NO_BREAK_SPACE, `g`), ` `) ?? ``;
}
