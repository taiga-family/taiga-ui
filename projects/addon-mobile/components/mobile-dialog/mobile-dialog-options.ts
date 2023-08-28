export interface TuiMobileDialogOptions<I> {
    readonly actions: readonly string[];
    readonly data: I;
    readonly label: string;
}
