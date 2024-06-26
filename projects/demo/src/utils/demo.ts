import {
    AsyncPipe,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {TuiComponentPipe} from './component.pipe';
import {TuiExamplePipe} from './example.pipe';
import {TuiKebabPipe} from './kebab.pipe';
import {TuiDocSetup} from './setup.component';

export const TuiDemo = [
    ...TuiAddonDoc,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TuiLink,
    TuiNotification,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    AsyncPipe,
    NgForOf,
    NgIf,
    TuiComponentPipe,
    TuiExamplePipe,
    TuiKebabPipe,
    TuiDocSetup,
] as const;
