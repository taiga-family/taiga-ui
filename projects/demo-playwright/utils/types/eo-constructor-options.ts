/**
 * Options shared by every Element Object constructor.
 *
 * @property customSelector Optional selector suffix appended to `hostSelector`.
 * @property index Optional zero-based index to pick a specific matching element.
 */
export interface EOConstructorOptions {
    customSelector?: string;
    index?: number;
}
