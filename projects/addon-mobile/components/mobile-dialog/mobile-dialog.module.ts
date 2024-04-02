import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRippleModule} from '@taiga-ui/addon-mobile/directives/ripple';
import {TuiButtonDirective} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiMobileDialogComponent} from './mobile-dialog.component';

@NgModule({
    imports: [CommonModule, TuiButtonDirective, TuiRippleModule, PolymorpheusModule],
    declarations: [TuiMobileDialogComponent],
    exports: [TuiMobileDialogComponent],
})
export class TuiMobileDialogModule {}
