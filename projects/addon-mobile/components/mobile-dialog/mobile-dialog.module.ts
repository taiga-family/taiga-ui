import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRippleModule} from '@taiga-ui/addon-mobile/directives/ripple';
import {tuiAsDialog} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TuiMobileDialogService} from './mobile-dialog.service';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiRippleModule, PolymorpheusModule],
    declarations: [TuiMobileDialogComponent],
    exports: [TuiMobileDialogComponent],
    providers: [tuiAsDialog(TuiMobileDialogService)],
})
export class TuiMobileDialogModule {}
