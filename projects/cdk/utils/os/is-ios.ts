import {tuiIsApplePlatform} from './is-apple-platform';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function tuiIsIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (tuiIsApplePlatform(navigator) && navigator.maxTouchPoints > 1)
    );
}
