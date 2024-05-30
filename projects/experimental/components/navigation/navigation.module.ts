import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {TuiFadeModule} from '@taiga-ui/experimental/directives/fade';

import {TuiAsideComponent} from './aside.component';
import {TuiHeaderComponent} from './header.component';
import {TuiHintAsideDirective} from './hint-aside.directive';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';

@NgModule({
    imports: [CommonModule, TuiScrollbarModule, TuiFadeModule],
    declarations: [
        TuiHeaderComponent,
        TuiHintAsideDirective,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
    ],
    exports: [
        TuiHeaderComponent,
        TuiHintAsideDirective,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
    ],
})
export class TuiNavigationModule {}
