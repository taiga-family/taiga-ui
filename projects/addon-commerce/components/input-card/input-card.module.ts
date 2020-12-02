import {NgModule} from '@angular/core';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputCardComponent} from './input-card.component';

@NgModule({
    imports: [TextMaskModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule],
    declarations: [TuiInputCardComponent],
    exports: [TuiInputCardComponent],
})
export class TuiInputCardModule {}
