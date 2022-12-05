import {TuiBaseDialogContext} from './base-dialog-context';

export type TuiAlertContext<T, G = void> = T & TuiBaseDialogContext<G>;
