import {TuiAsideComponent} from './aside.component';
import {TuiAsideGroupComponent} from './aside-group.component';
import {TuiAsideItemDirective} from './aside-item.directive';
import {TuiDrawerDirective} from './drawer.component';
import {TuiHeaderComponent} from './header.component';
import {TuiHintAsideDirective} from './hint-aside.directive';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';
import {TuiSubheaderCompactComponent, TuiSubheaderComponent} from './subheader.component';

export const TuiNavigation = [
    TuiHeaderComponent,
    TuiLogoComponent,
    TuiMainComponent,
    TuiAsideComponent,
    TuiAsideGroupComponent,
    TuiAsideItemDirective,
    TuiNavComponent,
    TuiHintAsideDirective,
    TuiDrawerDirective,
    TuiSubheaderComponent,
    TuiSubheaderCompactComponent,
] as const;
