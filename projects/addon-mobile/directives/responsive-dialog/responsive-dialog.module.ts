import {NgModule} from '@angular/core';

import {TuiResponsiveDialogDirective} from './responsive-dialog.directive';

@NgModule({
    declarations: [TuiResponsiveDialogDirective],
    exports: [TuiResponsiveDialogDirective],
})
export class TuiResponsiveDialogModule {}
