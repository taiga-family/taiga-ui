import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogDirective} from './dialog.directive';

@NgModule({
    imports: [
        PolymorpheusModule,
        TuiButtonDirective,
        CommonModule,
        TuiAutoFocusDirective,
    ],
    declarations: [TuiDialogComponent, TuiDialogDirective],
    exports: [TuiDialogComponent, TuiDialogDirective],
})
export class TuiDialogModule {}
