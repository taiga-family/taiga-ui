import {NgModule} from '@angular/core';

import {TuiLabelDirective} from './label.directive';
import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';

@NgModule({
    imports: [
        TuiLabelDirective,
        TuiTextfieldComponent,
        TuiTextfieldDirective,
        TuiTextfieldOptionsDirective,
    ],
    exports: [
        TuiLabelDirective,
        TuiTextfieldComponent,
        TuiTextfieldDirective,
        TuiTextfieldOptionsDirective,
    ],
})
export class TuiTextfieldModule {}
