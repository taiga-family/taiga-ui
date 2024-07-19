import {TuiAsideComponent} from './aside.component';
import {TuiAsideGroupComponent} from './aside-group.component';
import {TuiAsideItemDirective} from './aside-item.directive';
import {TuiHeaderComponent} from './header.component';
import {TuiHintAside} from './hint-aside.directive';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';

export const TuiNavigation = [
    TuiHeaderComponent,
    TuiLogoComponent,
    TuiMainComponent,
    TuiAsideComponent,
    TuiAsideGroupComponent,
    TuiAsideItemDirective,
    TuiNavComponent,
    TuiHintAside,
] as const;
