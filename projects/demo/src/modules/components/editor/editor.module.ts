import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiEditorComponent} from './editor.component';
import {TuiEditorExample1} from './examples/1';

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
        RouterModule.forChild(generateRoutes(ExampleTuiEditorComponent)),
    ],
    declarations: [ExampleTuiEditorComponent, TuiEditorExample1],
    exports: [ExampleTuiEditorComponent],
})
export class ExampleTuiEditorModule {}
