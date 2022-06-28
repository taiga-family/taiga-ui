import {isApplePlatform} from './is-apple-platform';

const IOS_REG_EXP = /ipad|iphone|ipod/;

/**
 * @deprecated: use {@link tuiIsIos} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isIos(navigator: Navigator): boolean {
    return (
        IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) ||
        (isApplePlatform(navigator) && navigator.maxTouchPoints > 1)
    );
}

export const tuiIsIos = isIos;
