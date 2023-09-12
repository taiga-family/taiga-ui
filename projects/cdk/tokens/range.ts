import {isPlatformBrowser} from '@angular/common';
import {inject, PLATFORM_ID} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

/**
 * SSR safe default empty Range
 */
export const TUI_RANGE = tuiCreateTokenFromFactory(() =>
    isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : ({} as unknown as Range),
);
