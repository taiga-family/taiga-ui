import {InjectionToken} from '@angular/core';

import type {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

export const ABSTRACT_PROPS_ACCESSOR =
    new InjectionToken<TuiSupportingDocumentationComponent>(
        ngDevMode ? 'ABSTRACT_PROPS_ACCESSOR' : '',
    );
