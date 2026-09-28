import {TuiErrorComponent} from './error.component';
import {TuiErrorDirective, TuiErrorField} from './error.directive';
import {TuiErrorPipe} from './error.pipe';

export const TuiError = [
    TuiErrorComponent,
    TuiErrorDirective,
    TuiErrorField,
    TuiErrorPipe,
] as const;
