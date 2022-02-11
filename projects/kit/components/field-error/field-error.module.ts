import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiErrorModule} from '@taiga-ui/core';

import {TuiFieldErrorComponent} from './field-error.component';

/**
 * @deprecated use {@link TuiFieldErrorPipeModule} (from '@taiga-ui/kit') instead
 */
@NgModule({
    imports: [CommonModule, TuiErrorModule, ReactiveFormsModule],
    declarations: [TuiFieldErrorComponent],
    exports: [TuiFieldErrorComponent],
})
export class TuiFieldErrorModule {}
