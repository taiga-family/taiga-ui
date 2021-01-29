import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiDialogModule,
    TuiNotificationsModule,
    TuiRootModule,
    TuiThemeNightModule,
} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/kit';
import {TuiDocHeaderModule} from '../../internal/header/header.module';
import {TuiDocNavigationModule} from '../navigation/navigation.module';
import {TuiDocMainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TuiToggleModule,
        TuiThemeNightModule,
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
