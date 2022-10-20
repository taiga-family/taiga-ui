import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiArrowModule, TuiAvatarModule, TuiToggleModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiButtonComponent} from './button.component';
import {TuiButtonExample1} from './examples/1';
import {TuiButtonExample2} from './examples/2';
import {TuiButtonExample3} from './examples/3';
import {TuiButtonExample4} from './examples/4';
import {TuiButtonExample5} from './examples/5';
import {TuiButtonExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiCardModule,
        TuiAvatarModule,
        TuiSvgModule,
        TuiToggleModule,
        TuiFocusableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        TuiArrowModule,
        TuiNotificationModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiButtonComponent)),
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiButtonComponent,
        TuiButtonExample1,
        TuiButtonExample2,
        TuiButtonExample3,
        TuiButtonExample4,
        TuiButtonExample5,
        TuiButtonExample6,
    ],
    exports: [ExampleTuiButtonComponent],
})
export class ExampleTuiButtonModule {}
