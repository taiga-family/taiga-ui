import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

import {ExampleTuiAutoFocusComponent} from './auto-focus.component';
import {TuiAutoFocusExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiAutoFocusDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAutoFocusComponent)),
    ],
    declarations: [ExampleTuiAutoFocusComponent, TuiAutoFocusExample1],
    exports: [ExampleTuiAutoFocusComponent],
})
export class ExampleTuiAutoFocusModule {}
