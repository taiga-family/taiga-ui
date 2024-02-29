import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiElementModule, TuiScrollService} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiScrollbarComponent} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

import {TuiScrollExample1} from './examples/1';
import {ExampleTuiScrollComponent} from './scroll.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiElementModule,
        TuiButtonModule,
        TuiScrollbarComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiScrollComponent)),
        TuiTextCodeModule,
        TuiInputNumberModule,
    ],
    declarations: [ExampleTuiScrollComponent, TuiScrollExample1],
    providers: [TuiScrollService],
    exports: [ExampleTuiScrollComponent],
})
export class ExampleTuiScrollModule {}
