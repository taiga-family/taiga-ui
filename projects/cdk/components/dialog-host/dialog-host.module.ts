import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollControlsModule} from '@taiga-ui/cdk/components/scroll-controls';
import {
    TuiFocusTrapModule,
    TuiLetModule,
    TuiOverscrollModule,
} from '@taiga-ui/cdk/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDialogHostComponent} from './dialog-host.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiOverscrollModule,
        TuiFocusTrapModule,
        TuiLetModule,
        TuiScrollControlsModule,
    ],
    declarations: [TuiDialogHostComponent],
    exports: [TuiDialogHostComponent],
})
export class TuiDialogHostModule {}
