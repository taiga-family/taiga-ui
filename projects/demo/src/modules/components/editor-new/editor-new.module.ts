import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorNewComponent} from './editor-new.component';
import {TuiEditorNewExample1} from './examples/1';
import {TuiEditorNewExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        TuiNotificationModule,
        TuiButtonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiDropdownControllerModule,
        RouterModule.forChild(generateRoutes(ExampleEditorNewComponent)),
    ],
    declarations: [ExampleEditorNewComponent, TuiEditorNewExample1, TuiEditorNewExample2],
    exports: [ExampleEditorNewComponent],
})
export class ExampleTuiEditorNewModule {}
