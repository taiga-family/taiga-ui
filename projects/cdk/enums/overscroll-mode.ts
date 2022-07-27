/**
 * Modes for {@link TuiOverscrollDirective}:
 *
 * All — blocks all scroll actions
 * Scroll — blocks scroll actions only if content is scrollable (equivalent to overscroll-behavior: contain)
 * None — blocking is disabled
 * @deprecated use join type {@link TuiOverscrollModeT}
 */
export const enum TuiOverscrollMode {
    All = `all`,
    Scroll = `scroll`,
    None = `none`,
}
