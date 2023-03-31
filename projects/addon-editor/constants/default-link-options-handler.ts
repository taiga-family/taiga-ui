export const TUI_EDITOR_LINK_HASH_PREFIX = `#` as const;
export const TUI_EDITOR_LINK_HTTP_PREFIX = `http://` as const;
export const TUI_EDITOR_LINK_HTTPS_PREFIX = `https://` as const;

export type TuiEditorLinkProtocol =
    | typeof TUI_EDITOR_LINK_HTTP_PREFIX
    | typeof TUI_EDITOR_LINK_HTTPS_PREFIX;

export type TuiEditorLinkPrefix =
    | TuiEditorLinkProtocol
    | typeof TUI_EDITOR_LINK_HASH_PREFIX;

export interface TuiEditorLinkOptions {
    readonly protocol: TuiEditorLinkProtocol;
}

export const TUI_DEFAULT_LINK_OPTIONS = {
    protocol: TUI_EDITOR_LINK_HTTPS_PREFIX,
};
