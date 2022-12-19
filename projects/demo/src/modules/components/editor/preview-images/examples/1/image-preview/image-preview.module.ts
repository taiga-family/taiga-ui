import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiEditorImagePreviewModule} from '@taiga-ui/addon-editor';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ImagePreviewExampleComponent} from './image-preview.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPreviewModule,
        TuiButtonModule,
        PolymorpheusModule,
        TuiEditorImagePreviewModule,
    ],
    exports: [
        TuiEditorImagePreviewModule,
        TuiEditorImagePreviewModule,
        ImagePreviewExampleComponent,
    ],
    declarations: [ImagePreviewExampleComponent],
})
export class ImagePreviewExampleModule {}
