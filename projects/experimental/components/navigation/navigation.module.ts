import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollableDirective, TuiScrollbarComponent} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';

import {TuiAsideComponent} from './aside.component';
import {TuiHeaderComponent} from './header.component';
import {TuiHintAsideDirective} from './hint-aside.directive';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';

@NgModule({
    imports: [
        CommonModule,
        TuiScrollbarComponent,
        TuiFadeDirective,
        TuiScrollableDirective,
    ],
    declarations: [
        TuiHeaderComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
        TuiHintAsideDirective,
    ],
    exports: [
        TuiHeaderComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideComponent,
        TuiNavComponent,
        TuiHintAsideDirective,
    ],
})
export class TuiNavigationModule {}
