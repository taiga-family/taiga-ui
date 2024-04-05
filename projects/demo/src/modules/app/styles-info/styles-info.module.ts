import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';

import {StylesInfoComponent} from './styles-info.component';

@NgModule({
    imports: [RouterModule, TuiNotificationModule, TuiLinkDirective],
    declarations: [StylesInfoComponent],
    exports: [StylesInfoComponent],
})
export class StylesInfoModule {}
