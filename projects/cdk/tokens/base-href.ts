import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_BASE_HREF = new InjectionToken(ngDevMode ? 'TUI_BASE_HREF' : '', {
    factory: () => inject(DOCUMENT).querySelector('base')?.href ?? '',
});
