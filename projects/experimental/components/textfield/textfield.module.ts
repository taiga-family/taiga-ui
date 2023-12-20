import {NgModule} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';

@NgModule({
    imports: [TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective],
    exports: [TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective],
})
export class TuiTextfieldModule {}
