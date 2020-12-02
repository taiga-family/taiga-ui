/**
 * get input values
 *
 * Extended by: Gabriel Schuster <github.com@actra.de>
 * Now gets values of inputs (including "checked" status radios, checkboxes), textareas and selects (including multiselects)
 * Tries to identify the elements as exact as possible, falls back to numeric index when identification fails
 * WIP refactor by: PatrickJS
 */
export declare function __getInputValues(): any;
/**
 * set input values
 *
 * Extended by: Gabriel Schuster <github.com@actra.de>
 * WIP refactor by: PatrickJS
 */
export declare function __setInputValues($inputs: any): void;
export declare function __createInputTransfer(): () => void;
