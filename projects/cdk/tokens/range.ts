import {isPlatformBrowser} from '@angular/common';
import {inject, PLATFORM_ID} from '@angular/core';
import {InjectionToken} from '@angular/core';

/**
 * SSR safe default empty Range
 */
export const TUI_RANGE = new InjectionToken(ngDevMode ? 'TUI_RANGE' : '', {
    factory: () =>
        isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : ({} as unknown as Range),
});
