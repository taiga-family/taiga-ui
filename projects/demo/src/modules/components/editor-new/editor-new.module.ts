import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiEditorModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorNewComponent} from './editor-new.component';
import {TuiEditorNewExample1} from './examples/1';

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
        RouterModule.forChild(generateRoutes(ExampleEditorNewComponent)),
    ],
    declarations: [ExampleEditorNewComponent, TuiEditorNewExample1],
    exports: [ExampleEditorNewComponent],
})
export class ExampleTuiEditorNewModule {}
