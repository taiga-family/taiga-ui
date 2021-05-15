export type TuiMobileDialogOptions<I> = I extends void
    ? TuiMobileDialogBaseOptions & {
          readonly data?: void;
      }
    : TuiMobileDialogBaseOptions & {
          readonly data: I;
      };

export interface TuiMobileDialogBaseOptions {
    readonly label: string;
    readonly actions: readonly string[];
}
