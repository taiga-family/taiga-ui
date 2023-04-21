import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER,
    TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER,
} from '@taiga-ui/addon-editor/constants';
import {tuiIsValidUrl} from '@taiga-ui/cdk';

interface TuiEditLinkParsed {
    prefix: string;
    path: string;
}

export function tuiEditLinkParseUrl(url?: string): TuiEditLinkParsed {
    if (url?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)) {
        const [anchor = ``] = url?.split(`#`).slice(-1) ?? [];

        return {prefix: TUI_EDITOR_LINK_HASH_PREFIX, path: anchor};
    }

    const [prefix = ``, path = ``] = url?.includes(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER)
        ? splitOsiProtocol(url ?? ``)
        : splitSimpleProtocol(url ?? ``);

    if (path.includes(TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER)) {
        const [protocol, otherPart] = splitSimpleProtocol(path);

        if (!!protocol && !!otherPart) {
            return {prefix: protocol, path: otherPart};
        }
    }

    return {prefix, path: prefix === `` ? url ?? `` : path};
}

function splitOsiProtocol(url?: string): Array<string | undefined> {
    const protocolPosition = url?.indexOf(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER) ?? -1;
    const [prefix, path] =
        protocolPosition > -1
            ? [
                  url?.slice(
                      0,
                      protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length,
                  ),
                  url?.slice(
                      protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length,
                      url.length,
                  ),
              ]
            : [``, url];
    const result = [prefix, path].filter(Boolean);

    return path?.includes(`://`) && result.length > 1 ? splitOsiProtocol(path) : result;
}

function splitSimpleProtocol(url: string): Array<string | undefined> {
    const [prefix, path] = url.split(/:/).slice(-2).filter(Boolean);

    if (!!prefix && !!path && !tuiIsValidUrl(url)) {
        return [`${prefix}:`, path];
    }

    return [];
}
