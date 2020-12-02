import {InjectionToken} from '@angular/core';

export const TUI_DOC_SEE_ALSO = new InjectionToken<ReadonlyArray<ReadonlyArray<string>>>(
    'Array of arrays of related pages',
    {
        factory: () => [],
    },
);
