/**
 * @internal used in calendar, year picker and wrapper
 */
// TODO: change type in v4.0
// eslint-disable-next-line no-restricted-syntax
export enum TuiInteractiveState {
    Active = `active`,
    Disabled = `disabled`,
    Hover = `hover`,
    Readonly = `readonly`,
}

export type TuiInteractiveStateT = 'active' | 'disabled' | 'hover';
