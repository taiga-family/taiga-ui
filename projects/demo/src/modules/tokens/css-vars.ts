import {InjectionToken} from '@angular/core';

export const CSS_VARS = new InjectionToken<readonly string[]>('CSS_VARS', {
    factory: () => [],
});
