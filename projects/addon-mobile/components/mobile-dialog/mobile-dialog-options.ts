export interface TuiMobileDialogOptions<I> {
    readonly label: string;
    readonly actions: readonly string[];
    readonly data: I;
}
