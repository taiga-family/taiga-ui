import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';

import {DropdownControllerDocumentationModule} from '../dropdown-controller-documentation/dropdown-controller-documentation.module';
import {HintControllerDocumentationModule} from '../hint-controller-documentation/hint-controller-documentation.module';
import {TextfieldControllerDocumentationModule} from '../textfield-controller-documentation/textfield-controller-documentation.module';
import {InheritedDocumentationComponent} from './inherited-documentation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiDocDocumentationModule,
        DropdownControllerDocumentationModule,
        HintControllerDocumentationModule,
        TextfieldControllerDocumentationModule,
    ],
    declarations: [InheritedDocumentationComponent],
    exports: [InheritedDocumentationComponent],
})
export class InheritedDocumentationModule {}
