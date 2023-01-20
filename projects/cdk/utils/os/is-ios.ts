import {tuiIsApplePlatform} from './is-apple-platform';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function tuiIsIos(navigatorRef: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigatorRef.userAgent.toLowerCase()) ||
        (tuiIsApplePlatform(navigatorRef) && navigatorRef.maxTouchPoints > 1)
    );
}
