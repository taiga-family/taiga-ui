import {InjectionToken} from '@angular/core';

import {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

export const ABSTRACT_PROPS_ACCESSOR =
    new InjectionToken<TuiSupportingDocumentationComponent>(
        `Component extends AbstractExample class`,
    );
