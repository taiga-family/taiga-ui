export interface TuiTextfieldHost {
    readonly inputMode:
        | 'decimal'
        | 'email'
        | 'none'
        | 'numeric'
        | 'search'
        | 'tel'
        | 'text'
        | 'url';
    readonly readOnly: boolean;
    readonly disabled: boolean;
    readonly invalid: boolean;
    readonly focusable: boolean;
    readonly value: string;
    onValueChange(value: string[] | string): void;
    process(input: HTMLInputElement): void;
}
