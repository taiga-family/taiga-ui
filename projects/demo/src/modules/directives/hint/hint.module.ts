import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiAutoColorModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintExample1} from './examples/1';
import {TuiHintExample2} from './examples/2';
import {ExampleTuiHintComponent} from './hint.component';

@NgModule({
    imports: [
        TuiAvatarComponent,
        TuiHintModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintComponent)),
        TuiNotificationModule,
        TuiAutoColorModule,
    ],
    declarations: [ExampleTuiHintComponent, TuiHintExample1, TuiHintExample2],
    exports: [ExampleTuiHintComponent],
})
export class ExampleTuiHintModule {}
