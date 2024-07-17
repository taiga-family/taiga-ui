import {TuiAsideComponent} from './aside.component';
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
    TuiNavComponent,
    TuiHintAside,
] as const;
