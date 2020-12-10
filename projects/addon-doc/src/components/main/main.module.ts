import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDialogModule, TuiNotificationsModule, TuiRootModule} from '@taiga-ui/core';
import {TuiDocHeaderModule} from '../../internal/header/header.module';
import {TuiDocNavigationModule} from '../navigation/navigation.module';
import {TuiDocMainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiDocHeaderModule,
        TuiRootModule,
        TuiDialogModule,
        TuiNotificationsModule,
        TuiDocNavigationModule,
    ],
    declarations: [TuiDocMainComponent],
    exports: [TuiDocMainComponent],
})
export class TuiDocMainModule {}
