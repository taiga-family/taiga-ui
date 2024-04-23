import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiLinkDirective} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintPointerExample1} from './examples/1';
import {ExampleTuiHintPointerComponent} from './hint-pointer.component';

@NgModule({
    imports: [
        TuiHintModule,
        TuiIslandModule,
        TuiLinkDirective,
        PolymorpheusModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintPointerComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiHintPointerComponent, TuiHintPointerExample1],
    exports: [ExampleTuiHintPointerComponent],
})
export class ExampleTuiHintPointerModule {}
