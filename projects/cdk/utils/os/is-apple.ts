import {isIos} from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

/**
 * @deprecated: use {@link tuiIsApple} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isApple(navigator: Navigator): boolean {
    return isIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}

export const tuiIsApple = isApple;
