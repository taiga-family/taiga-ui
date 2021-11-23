import {NgModule} from '@angular/core';

import {TuiTextfieldAutocompleteDirective} from './textfield-autocomplete.directive';
import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldExampleTextDirective} from './textfield-example-text.directive';
import {TuiTextfieldInputModeDirective} from './textfield-input-mode.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldMaxLengthDirective} from './textfield-max-length.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TuiTextfieldTypeDirective} from './textfield-type.directive';

@NgModule({
    declarations: [
        TuiTextfieldAutocompleteDirective,
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldExampleTextDirective,
        TuiTextfieldInputModeDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldMaxLengthDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldTypeDirective,
    ],
    exports: [
        TuiTextfieldAutocompleteDirective,
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldExampleTextDirective,
        TuiTextfieldInputModeDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldMaxLengthDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldTypeDirective,
    ],
})
export class TuiTextfieldControllerModule {}
