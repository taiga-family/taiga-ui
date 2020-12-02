import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputTimeModule,
    TuiIslandModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {TuiSkeletonExample1} from './examples/1';
import {TuiSkeletonExample2} from './examples/2';
import {SkeletonComponent} from './skeleton.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiCheckboxLabeledModule,
        TuiButtonModule,
        TuiInputPasswordModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiToggleModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(SkeletonComponent)),
    ],
    declarations: [SkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    exports: [SkeletonComponent],
})
export class SkeletonModule {}
