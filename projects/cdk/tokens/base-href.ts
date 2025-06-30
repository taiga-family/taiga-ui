import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const TUI_BASE_HREF = new InjectionToken('TUI_BASE_HREF', {
    factory: () => inject(DOCUMENT).querySelector('base')?.href ?? '',
});
