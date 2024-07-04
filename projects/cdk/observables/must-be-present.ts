/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

export function tuiMustBePresent<T>(): OperatorFunction<T | null | undefined, T> {
    return map((value) => {
        if (!tuiIsPresent(value)) {
            throw new TuiValuePresentException();
        }

        return value;
    });
}

export class TuiValuePresentException extends Error {
    constructor() {
        super(ngDevMode ? 'Value must present' : '');
    }
}
