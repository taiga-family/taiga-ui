import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_IS_TOUCH = tuiCreateTokenFromFactory(
    () => inject(WINDOW).matchMedia('(pointer: coarse)').matches,
);
