import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';

import {StylesInfoComponent} from './styles-info.component';

@NgModule({
    imports: [RouterModule, TuiNotificationModule, TuiLinkModule],
    declarations: [StylesInfoComponent],
    exports: [StylesInfoComponent],
})
export class StylesInfoModule {}
