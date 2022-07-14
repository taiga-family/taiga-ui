import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {BrowsersComponent} from './browsers.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(BrowsersComponent)),
    ],
    declarations: [BrowsersComponent],
    exports: [BrowsersComponent],
})
export class BrowsersModule {}
