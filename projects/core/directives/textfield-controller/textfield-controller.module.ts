import {NgModule} from '@angular/core';

import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';

@NgModule({
    declarations: [
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldIconDirective,
        TuiTextfieldIconLeftDirective,
    ],
    exports: [
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldIconDirective,
        TuiTextfieldIconLeftDirective,
    ],
})
export class TuiTextfieldControllerModule {}
