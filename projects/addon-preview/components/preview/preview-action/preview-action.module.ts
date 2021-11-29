import {NgModule} from '@angular/core';

import {TuiPreviewActionDirective} from './preview-action.directive';

@NgModule({
    declarations: [TuiPreviewActionDirective],
    exports: [TuiPreviewActionDirective],
})
export class TuiPreviewActionModule {}
