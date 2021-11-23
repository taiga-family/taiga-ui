import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocDemoModule, TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';

import {TuiCustomizationComponent} from './customization.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TuiDocDocumentationModule,
        TuiDocDemoModule,
        TuiModeModule,
        TuiAccordionModule,
    ],
    declarations: [TuiCustomizationComponent],
    exports: [TuiCustomizationComponent],
})
export class TuiCustomizationModule {}
