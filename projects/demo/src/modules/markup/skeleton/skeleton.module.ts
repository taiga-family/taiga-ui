import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiModeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputTimeModule,
    TuiIslandModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiSkeletonExample1} from './examples/1';
import {TuiSkeletonExample2} from './examples/2';
import {SkeletonComponent} from './skeleton.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StylesInfoModule,
        TuiModeModule,
        TuiInputTimeModule,
        TuiCheckboxLabeledModule,
        TuiButtonModule,
        TuiInputPasswordModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiToggleModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(SkeletonComponent)),
        TuiTextfieldControllerModule,
    ],
    declarations: [SkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    exports: [SkeletonComponent],
})
export class SkeletonModule {}
