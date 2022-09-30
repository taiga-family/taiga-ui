import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintExample1} from './examples/1';
import {ExampleTuiHintComponent} from './hint.component';

@NgModule({
    imports: [
        TuiHintModule,
        TuiAvatarModule,
        CommonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintComponent)),
    ],
    declarations: [ExampleTuiHintComponent, TuiHintExample1],
    exports: [ExampleTuiHintComponent],
})
export class ExampleTuiHintModule {}
