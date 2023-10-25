/**
 * Handler that always returns `false`.
 */
// eslint-disable-next-line no-restricted-syntax
export const TUI_ALWAYS_FALSE_HANDLER = (): false => false;

/**
 * @deprecated: use {@link TUI_ALWAYS_FALSE_HANDLER}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ALWAYS_FALSE_HANDLER = TUI_ALWAYS_FALSE_HANDLER;
