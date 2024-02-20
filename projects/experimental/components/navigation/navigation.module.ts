import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {TuiFadeModule} from '@taiga-ui/experimental/directives/fade';

import {TuiAsideComponent} from './aside.component';
import {TuiHeadComponent} from './head.component';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';

@NgModule({
    imports: [CommonModule, TuiScrollbarModule, TuiFadeModule],
    declarations: [
        TuiHeadComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
    ],
    exports: [
        TuiHeadComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
    ],
})
export class TuiNavigationModule {}
