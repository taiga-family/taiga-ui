import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAlertModule,
    TuiButtonDirective,
    TuiDialogModule,
    TuiRootModule,
} from '@taiga-ui/core';

import {TuiDocHeaderModule} from '../internal/header/header.module';
import {TuiDocNavigationModule} from '../navigation/navigation.module';
import {TuiDocMainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiDocHeaderModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiButtonDirective,
        TuiDocNavigationModule,
    ],
    declarations: [TuiDocMainComponent],
    exports: [TuiDocMainComponent],
})
export class TuiDocMainModule {}
