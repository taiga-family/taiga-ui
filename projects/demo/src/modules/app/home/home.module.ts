import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {HomeComponent} from './home.component';

@NgModule({
    imports: [RouterModule, TuiDocCodeModule, TuiNotificationModule, TuiLinkModule],
    entryComponents: [HomeComponent],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
