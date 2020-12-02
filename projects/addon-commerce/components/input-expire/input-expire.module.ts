import {NgModule} from '@angular/core';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputExpireComponent} from './input-expire.component';

@NgModule({
    imports: [TextMaskModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule],
    declarations: [TuiInputExpireComponent],
    exports: [TuiInputExpireComponent],
})
export class TuiInputExpireModule {}
