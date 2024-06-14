import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

import {TuiAside} from './aside.component';
import {TuiHeader} from './header.component';
import {TuiHintAside} from './hint-aside.directive';
import {TuiLogo} from './logo.component';
import {TuiMain} from './main.component';
import {TuiNav} from './nav.component';

@NgModule({
    imports: [CommonModule, TuiScrollbar, TuiFade, TuiScrollable],
    declarations: [TuiHeader, TuiLogo, TuiMain, TuiAside, TuiNav, TuiHintAside],
    exports: [TuiHeader, TuiLogo, TuiMain, TuiAside, TuiNav, TuiHintAside],
})
export class TuiNavigationModule {}
