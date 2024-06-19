import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TuiButton} from '@taiga-ui/core/components/button';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogDirective} from './dialog.directive';

@NgModule({
    imports: [
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        CommonModule,
        TuiAutoFocus,
    ],
    declarations: [TuiDialogComponent, TuiDialogDirective],
    exports: [TuiDialogComponent, TuiDialogDirective],
})
export class TuiDialogModule {}
