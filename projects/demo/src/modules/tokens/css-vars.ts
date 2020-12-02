import {InjectionToken} from '@angular/core';

export const CSS_VARS = new InjectionToken<ReadonlyArray<string>>(
    'CSS vars list for customization',
    {
        factory: () => [],
    },
);
