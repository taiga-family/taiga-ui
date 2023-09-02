import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule} from '@taiga-ui/core';
import {tuiGenerateDialogableRoute} from '@taiga-ui/kit';

import {DialogComponent} from './dialog.component';

@NgModule({
    imports: [
        TuiButtonModule,
        RouterModule.forChild([tuiGenerateDialogableRoute(DialogComponent)]),
    ],
    declarations: [DialogComponent],
    exports: [DialogComponent],
})
export class DialogModule {}
