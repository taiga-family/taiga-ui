import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiWysiwygModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiWysiwygExample1} from './examples/1';
import {ExampleTuiWysiwygComponent} from './wysiwyg.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiWysiwygModule,
        TuiEditorSocketModule,
        TuiNotificationModule,
        TuiButtonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiWysiwygComponent)),
    ],
    declarations: [ExampleTuiWysiwygComponent, TuiWysiwygExample1],
    exports: [ExampleTuiWysiwygComponent],
})
export class ExampleTuiWysiwygModule {}
