// TODO: move to legacy before 4.0
export interface TuiTextfieldHost {
    readonly disabled: boolean;
    readonly focusable: boolean;
    readonly inputMode:
        | 'decimal'
        | 'email'
        | 'none'
        | 'numeric'
        | 'search'
        | 'tel'
        | 'text'
        | 'url';
    readonly invalid: boolean;
    onValueChange(value: string): void;
    process(input: HTMLInputElement): void;
    readonly readOnly: boolean;
    readonly value: string;
}
