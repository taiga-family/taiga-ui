/**
 * Modes for {@link TuiOverscrollDirective}:
 *
 * All — blocks all scroll actions
 * Scroll — blocks scroll actions only if content is scrollable (equivalent to overscroll-behavior: contain)
 * None — blocking is disabled
 */
export const enum TuiOverscrollMode {
    All = 'all',
    Scroll = 'scroll',
    None = 'none',
}
