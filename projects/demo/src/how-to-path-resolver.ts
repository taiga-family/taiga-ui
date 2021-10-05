import {InjectionToken} from '@angular/core';
import {identity} from '@taiga-ui/cdk';

export const HOW_TO_PATH_RESOLVER = new InjectionToken(
    'resolves path to markdown with how to guide',
    {
        factory: () => identity,
    },
);
