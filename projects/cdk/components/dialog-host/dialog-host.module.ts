import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk/directives';
import {TuiFocusTrapModule} from '@taiga-ui/cdk/directives/focus-trap';
import {TuiOverscrollModule} from '@taiga-ui/cdk/directives/overscroll';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDialogHostComponent} from './dialog-host.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiOverscrollModule,
        TuiFocusTrapModule,
        TuiLetModule,
    ],
    declarations: [TuiDialogHostComponent],
    exports: [TuiDialogHostComponent],
})
export class TuiDialogHostModule {}
