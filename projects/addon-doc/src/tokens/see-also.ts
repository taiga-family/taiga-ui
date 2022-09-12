import {InjectionToken} from '@angular/core';

export const TUI_DOC_SEE_ALSO = new InjectionToken<ReadonlyArray<readonly string[]>>(
    `[TUI_DOC_SEE_ALSO]: Array of arrays of related pages`,
    {
        factory: () => [],
    },
);
