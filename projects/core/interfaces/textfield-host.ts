export interface TuiTextfieldHost {
    readonly readOnly: boolean;
    readonly disabled: boolean;
    readonly invalid: boolean;
    readonly focusable: boolean;
    readonly value: string;
    onValueChange(value: string): void;
    process(input: HTMLInputElement): void;
}
