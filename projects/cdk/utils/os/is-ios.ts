const IOS_REG_EXP = /ipad|iphone|ipod/;

export function isIos(navigator: Navigator): boolean {
    const userAgentValue = navigator.userAgent.toLowerCase();

    return (
        IOS_REG_EXP.test(userAgentValue) ||
        (userAgentValue.includes('apple') && navigator.maxTouchPoints > 1)
    );
}
