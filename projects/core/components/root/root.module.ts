import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAlertsComponent} from '@taiga-ui/core/components/alert';
import {TuiDialogsComponent} from '@taiga-ui/core/components/dialog';
import {TuiHintsHostModule} from '@taiga-ui/core/components/hints-host';
import {TuiScrollControlsComponent} from '@taiga-ui/core/components/scroll-controls';
import {TuiDropdownsComponent} from '@taiga-ui/core/directives/dropdown';
import {TuiSvgDefsHostModule} from '@taiga-ui/core/internal/svg-defs-host';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

import {TuiRootComponent} from './root.component';

@NgModule({
    imports: [
        CommonModule,
        EventPluginsModule,
        TuiDropdownsComponent,
        TuiSvgDefsHostModule,
        TuiHintsHostModule,
        TuiScrollControlsComponent,
        TuiDialogsComponent,
        TuiAlertsComponent,
    ],
    declarations: [TuiRootComponent],
    exports: [TuiRootComponent],
})
export class TuiRootModule {}
