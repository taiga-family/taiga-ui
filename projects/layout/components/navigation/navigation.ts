import {TuiDataList} from '@taiga-ui/core/components/data-list';

import {TuiAsideComponent} from './aside.component';
import {TuiAsideGroupComponent} from './aside-group.component';
import {TuiHeaderComponent} from './header.component';
import {TuiHintAside} from './hint-aside.directive';
import {TuiLogoComponent} from './logo.component';
import {TuiMainComponent} from './main.component';
import {TuiNavComponent} from './nav.component';
import {TuiOptionDirective} from './option.directive';

export const TuiNavigation = [
    TuiHeaderComponent,
    TuiLogoComponent,
    TuiMainComponent,
    TuiAsideComponent,
    TuiAsideGroupComponent,
    TuiNavComponent,
    TuiOptionDirective,
    TuiHintAside,
    TuiDataList,
] as const;
