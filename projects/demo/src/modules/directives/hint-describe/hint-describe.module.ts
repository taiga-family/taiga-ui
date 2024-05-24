import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiHint, TuiTooltipModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiHintDescribeExample1} from './examples/1';
import {ExampleTuiHintDescribeComponent} from './hint-describe.component';

@NgModule({
    imports: [
        PolymorpheusModule,
        CommonModule,
        FormsModule,
        TuiHint,
        TuiButtonDirective,
        TuiInputModule,
        TuiTooltipModule,
        InheritedDocumentationModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintDescribeComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiHintDescribeComponent, TuiHintDescribeExample1],
    exports: [ExampleTuiHintDescribeComponent],
})
export class ExampleTuiHintDescribeModule {}
