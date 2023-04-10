import {TuiBaseDialogContext} from "@taiga-ui/cdk";

export interface TuiMobileDialogOptions<I> {
    readonly label: string;
    readonly actions: readonly string[];
    readonly data: I;
}

export interface TuiMobileDialogContext<I = undefined>
    extends TuiBaseDialogContext<number>,
        TuiMobileDialogOptions<I> {}
