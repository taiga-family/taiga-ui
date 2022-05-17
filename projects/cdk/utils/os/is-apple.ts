import {isIos} from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function isApple(navigator: Navigator): boolean {
    return isIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
