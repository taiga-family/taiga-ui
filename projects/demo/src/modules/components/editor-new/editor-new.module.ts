import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiEditorNewModule} from '@taiga-ui/addon-editor-new';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiEditorSocketModule} from '../../../../../addon-editor';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiEditorNewComponent} from './editor-new.component';
import {TuiEditorNewExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorNewModule,
        TuiEditorSocketModule,
        TuiNotificationModule,
        TuiButtonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiEditorNewComponent)),
    ],
    declarations: [ExampleTuiEditorNewComponent, TuiEditorNewExample1],
    exports: [ExampleTuiEditorNewComponent],
})
export class ExampleTuiEditorNewModule {}
