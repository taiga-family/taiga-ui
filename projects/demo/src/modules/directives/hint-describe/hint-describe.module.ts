import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiHintModule, TuiTooltipModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintDescribeExample1} from './examples/1';
import {ExampleTuiHintDescribeComponent} from './hint-describe.component';

@NgModule({
    imports: [
        PolymorpheusModule,
        CommonModule,
        FormsModule,
        TuiHintModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTooltipModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintDescribeComponent)),
    ],
    declarations: [ExampleTuiHintDescribeComponent, TuiHintDescribeExample1],
    exports: [ExampleTuiHintDescribeComponent],
})
export class ExampleTuiHintDescribeModule {}
