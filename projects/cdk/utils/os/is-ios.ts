import {isApplePlatform} from './is-apple-platform';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function isIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (isApplePlatform(navigator) && navigator.maxTouchPoints > 1)
    );
}
