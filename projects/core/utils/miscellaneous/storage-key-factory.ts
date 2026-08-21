export const TUI_STORAGE_KEY_PREFIX = '@tui';

export type TuiStorageKey = `${typeof TUI_STORAGE_KEY_PREFIX}[${string}]`;

export function tuiStorageKeyFactory(key: string): TuiStorageKey {
    return `${TUI_STORAGE_KEY_PREFIX}[${key}]`;
}
