import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/experimental';
import {TuiAvatarModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintExample1} from './examples/1';
import {TuiHintExample2} from './examples/2';
import {TuiHintExample3} from './examples/3';
import {ExampleTuiHintComponent} from './hint.component';

@NgModule({
    imports: [
        TuiHintModule,
        TuiAvatarModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintComponent)),
        TuiNotificationModule,
        TuiBadgeModule,
    ],
    declarations: [
        ExampleTuiHintComponent,
        TuiHintExample1,
        TuiHintExample2,
        TuiHintExample3,
    ],
    exports: [ExampleTuiHintComponent],
})
export class ExampleTuiHintModule {}
