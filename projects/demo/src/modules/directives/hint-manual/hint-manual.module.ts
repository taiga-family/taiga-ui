import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintManualExample1} from './examples/1';
import {ExampleTuiHintManualComponent} from './hint-manual.component';

@NgModule({
    imports: [
        TuiButtonModule,
        TuiHintModule,
        TuiLinkModule,
        TuiModeModule,
        PolymorpheusModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintManualComponent)),
    ],
    declarations: [ExampleTuiHintManualComponent, TuiHintManualExample1],
    exports: [ExampleTuiHintManualComponent],
})
export class ExampleTuiHintManualModule {}
