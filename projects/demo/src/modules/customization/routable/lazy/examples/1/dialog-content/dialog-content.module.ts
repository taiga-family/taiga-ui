import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {tuiGenerateDialogableRoute} from '@taiga-ui/kit';

import {DialogContentComponent} from './dialog-content.component';

@NgModule({
    // step 4:  use tuiGenerateDialogableRoute without path param(or with path: '')
    imports: [
        RouterModule.forChild([tuiGenerateDialogableRoute(DialogContentComponent)]),
    ],
    declarations: [DialogContentComponent],
    exports: [DialogContentComponent],
})
export class DialogContentModule {}
