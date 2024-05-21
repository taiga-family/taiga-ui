import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {DropdownDocumentationModule} from '../dropdown-documentation/dropdown-documentation.module';
import {HintControllerDocumentationModule} from '../hint-controller-documentation/hint-controller-documentation.module';
import {NumberFormatDocumentationModule} from '../number-format-documentation/number-format-documentation.module';
import {TextfieldControllerDocumentationModule} from '../textfield-controller-documentation/textfield-controller-documentation.module';
import {InheritedDocumentationComponent} from './inherited-documentation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        DropdownDocumentationModule,
        HintControllerDocumentationModule,
        TextfieldControllerDocumentationModule,
        NumberFormatDocumentationModule,
    ],
    declarations: [InheritedDocumentationComponent],
    exports: [InheritedDocumentationComponent],
})
export class InheritedDocumentationModule {}
