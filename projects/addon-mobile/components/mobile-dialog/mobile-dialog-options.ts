export interface TuiMobileDialogOptions<I> {
    readonly label: string;
    readonly actions: ReadonlyArray<string>;
    readonly data: I;
}
