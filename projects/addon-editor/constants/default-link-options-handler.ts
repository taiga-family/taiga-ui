export const TUI_EDITOR_LINK_HASH_PREFIX = `#` as const;
export const TUI_EDITOR_LINK_HTTP_PREFIX = `http://` as const;
export const TUI_EDITOR_LINK_HTTPS_PREFIX = `https://` as const;
export const TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER = `:` as const;
export const TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER = `://` as const;

type Protocol = string; // ftp, ssh, http, https, mailto, etc..

export type TuiEditorLinkProtocol =
    | `${Protocol}${typeof TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER}`
    | `${Protocol}${typeof TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER}`;

export type TuiEditorLinkPrefix =
    | TuiEditorLinkProtocol
    | typeof TUI_EDITOR_LINK_HASH_PREFIX;

export interface TuiEditorLinkOptions {
    readonly protocol: TuiEditorLinkProtocol;
}

export const TUI_DEFAULT_LINK_OPTIONS = {
    protocol: TUI_EDITOR_LINK_HTTPS_PREFIX,
};
