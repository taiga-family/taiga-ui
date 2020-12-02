import {InjectionToken} from '@angular/core';
import {supportingDocumentationComponent} from './supporting-documentation-component';

export const ABSTRACT_PROPS_ACCESSOR = new InjectionToken<supportingDocumentationComponent>(
    'Component extends AbstractExample class',
);
