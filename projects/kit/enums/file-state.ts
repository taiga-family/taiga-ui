/**
 * @internal
 */
export const enum TuiFileState {
    Error = `error`,
    Deleted = `deleted`,
    Loading = `loading`,
    Normal = `normal`,
}

export type TuiFileStateT = 'error' | 'deleted' | 'loading' | 'normal';
