import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

import {StylesInfoComponent} from './styles-info.component';

@NgModule({
    imports: [RouterModule, TuiNotificationComponent, TuiLinkDirective],
    declarations: [StylesInfoComponent],
    exports: [StylesInfoComponent],
})
export class StylesInfoModule {}
