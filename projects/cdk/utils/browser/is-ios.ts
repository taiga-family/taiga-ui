import {tuiIsApple} from './is-apple';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export function tuiIsIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (tuiIsApple(navigator) && navigator.maxTouchPoints > 1)
    );
}
