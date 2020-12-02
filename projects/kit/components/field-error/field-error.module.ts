import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiErrorModule} from '@taiga-ui/core';
import {TuiFieldErrorComponent} from './field-error.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TuiErrorModule],
    declarations: [TuiFieldErrorComponent],
    exports: [TuiFieldErrorComponent],
})
export class TuiFieldErrorModule {}
