import {tuiIsIos} from '@taiga-ui/cdk';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function tuiIsApple(navigator: Navigator): boolean {
    return tuiIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
