import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiModeModule, TuiPointerHintModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiPointerHintExample1} from './examples/1';
import {ExampleTuiPointerHintComponent} from './pointer-hint.component';

@NgModule({
    imports: [
        TuiPointerHintModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiModeModule,
        PolymorpheusModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPointerHintComponent)),
    ],
    declarations: [ExampleTuiPointerHintComponent, TuiPointerHintExample1],
    exports: [ExampleTuiPointerHintComponent],
})
export class ExampleTuiPointerHintModule {}
