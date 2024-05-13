import {NgModule} from '@angular/core';
import {TuiLabelDirective} from '@taiga-ui/core/components/label';

import {TuiSelectDirective} from './select.directive';
import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';

@NgModule({
    imports: [
        TuiLabelDirective,
        TuiSelectDirective,
        TuiTextfieldComponent,
        TuiTextfieldDirective,
        TuiTextfieldOptionsDirective,
    ],
    exports: [
        TuiLabelDirective,
        TuiSelectDirective,
        TuiTextfieldComponent,
        TuiTextfieldDirective,
        TuiTextfieldOptionsDirective,
    ],
})
export class TuiTextfieldModule {}
