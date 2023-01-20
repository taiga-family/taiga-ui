import {tuiIsIos} from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function tuiIsApple(navigatorRef: Navigator): boolean {
    return (
        tuiIsIos(navigatorRef) ||
        SAFARI_REG_EXP.test(navigatorRef.userAgent.toLowerCase())
    );
}
