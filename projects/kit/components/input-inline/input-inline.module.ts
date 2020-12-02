import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiFocusedModule} from '@taiga-ui/cdk';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputInlineComponent} from './input-inline.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TextMaskModule,
    ],
    declarations: [TuiInputInlineComponent],
    exports: [TuiInputInlineComponent],
})
export class TuiInputInlineModule {}
