import {tuiIsIos} from '@taiga-ui/cdk/utils/browser';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

/**
 * @deprecated: drop in v5.0
 */
export function tuiIsApple(navigator: Navigator): boolean {
    return tuiIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
