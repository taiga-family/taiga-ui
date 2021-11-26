import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDialogHostModule, TuiDragModule, TuiPortalHostModule} from '@taiga-ui/cdk';
import {TuiHintsHostModule} from '@taiga-ui/core/components/hints-host';
import {TuiScrollControlsModule} from '@taiga-ui/core/components/scroll-controls';
import {TuiSvgDefsHostModule} from '@taiga-ui/core/internal/svg-defs-host';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

import {TuiRootComponent} from './root.component';

@NgModule({
    imports: [
        CommonModule,
        EventPluginsModule,
        TuiDragModule,
        TuiPortalHostModule,
        TuiSvgDefsHostModule,
        TuiHintsHostModule,
        TuiDialogHostModule,
        TuiScrollControlsModule,
    ],
    declarations: [TuiRootComponent],
    exports: [TuiRootComponent],
})
export class TuiRootModule {}
