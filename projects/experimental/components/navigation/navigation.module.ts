import {TuiAside} from './aside.component';
import {TuiHeader} from './header.component';
import {TuiHintAside} from './hint-aside.directive';
import {TuiLogo} from './logo.component';
import {TuiMain} from './main.component';
import {TuiNav} from './nav.component';

export const TuiNavigation = [
    TuiHeader,
    TuiLogo,
    TuiMain,
    TuiAside,
    TuiNav,
    TuiHintAside,
] as const;
