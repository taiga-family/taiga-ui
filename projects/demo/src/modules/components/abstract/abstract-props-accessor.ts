import type {TuiSupportingDocumentationComponent} from './supporting-documentation-component';
import {InjectionToken} from '@angular/core';

export const ABSTRACT_PROPS_ACCESSOR =
    new InjectionToken<TuiSupportingDocumentationComponent>(
        ngDevMode ? 'ABSTRACT_PROPS_ACCESSOR' : '',
    );
