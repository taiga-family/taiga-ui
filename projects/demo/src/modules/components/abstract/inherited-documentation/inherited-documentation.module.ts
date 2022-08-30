import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';

import {DropdownDocumentationModule} from '../dropdown-documentation/dropdown-documentation.module';
import {HintControllerDocumentationModule} from '../hint-controller-documentation/hint-controller-documentation.module';
import {TextfieldControllerDocumentationModule} from '../textfield-controller-documentation/textfield-controller-documentation.module';
import {InheritedDocumentationComponent} from './inherited-documentation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiDocDocumentationModule,
        DropdownDocumentationModule,
        HintControllerDocumentationModule,
        TextfieldControllerDocumentationModule,
    ],
    declarations: [InheritedDocumentationComponent],
    exports: [InheritedDocumentationComponent],
})
export class InheritedDocumentationModule {}
