import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {ExampleTuiEditorDraggableGroupsComponent} from './editor-groups.component';
import {TuiEditorGroupExample1} from './examples/1';
import {TuiEditorGroupExample2} from './examples/2';
import {TuiEditorGroupExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorDraggableGroupsComponent),
        ),
    ],
    declarations: [
        TuiEditorGroupExample1,
        TuiEditorGroupExample2,
        TuiEditorGroupExample3,
        ExampleTuiEditorDraggableGroupsComponent,
    ],
})
export class ExampleTuiEditorGroupsModule {}
