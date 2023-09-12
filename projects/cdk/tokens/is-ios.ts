import {inject} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory, tuiIsIos} from '@taiga-ui/cdk/utils';

/**
 * iOS browser detection
 */
export const TUI_IS_IOS = tuiCreateTokenFromFactory(() => tuiIsIos(inject(NAVIGATOR)));
