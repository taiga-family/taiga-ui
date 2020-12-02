import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

export function maskedNumberStringToNumber(value: string): number {
    return parseFloat(value.split(CHAR_NO_BREAK_SPACE).join('').split(',').join('.'));
}
