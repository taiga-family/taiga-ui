import {InjectionToken} from '@angular/core';

import type {TuiSupportingDocumentation} from './supporting-documentation-component';

export const ABSTRACT_PROPS_ACCESSOR = new InjectionToken<TuiSupportingDocumentation>(
    '[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class',
);
