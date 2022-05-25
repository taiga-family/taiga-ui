type VersionRange = {major: number; minor: number; patch: number};

export function getIosVersion(navigator: Navigator): VersionRange | null {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        const [, major = '0', minor = '0', patch = '0'] =
            navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/) || [];

        return {major: Number(major), minor: Number(minor), patch: Number(patch)};
    }

    return null;
}
