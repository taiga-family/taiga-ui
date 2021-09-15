import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiErrorModule} from '@taiga-ui/core';
import {TuiFieldErrorComponent} from './field-error.component';

@NgModule({
    imports: [CommonModule, TuiErrorModule],
    declarations: [TuiFieldErrorComponent],
    exports: [TuiFieldErrorComponent],
})
export class TuiFieldErrorModule {}
