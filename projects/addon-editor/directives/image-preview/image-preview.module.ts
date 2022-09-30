import {NgModule} from '@angular/core';

import {TuiEditorImagePreviewDirective} from './image-preview.directive';

@NgModule({
    declarations: [TuiEditorImagePreviewDirective],
    exports: [TuiEditorImagePreviewDirective],
})
export class TuiEditorImagePreviewModule {}
