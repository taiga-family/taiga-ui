import {InjectionToken} from '@angular/core';

import {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

export const ABSTRACT_PROPS_ACCESSOR =
    new InjectionToken<TuiSupportingDocumentationComponent>(
        `[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class`,
    );
