import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiErrorModule} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit/pipes';

import {TuiFieldErrorComponent} from './field-error.component';

/**
 * @deprecated use {@link TuiFieldErrorPipeModule} (from '@taiga-ui/kit') instead
 */
@NgModule({
    imports: [CommonModule, TuiErrorModule, TuiFieldErrorPipeModule],
    declarations: [TuiFieldErrorComponent],
    exports: [TuiFieldErrorComponent],
})
export class TuiFieldErrorModule {}
