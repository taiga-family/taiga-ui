import type {FactoryProvider} from '@angular/core';
import {Optional, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core';
import {identity} from 'rxjs';

export const TUI_VALUE_ACCESSOR_PROVIDER: FactoryProvider = {
    provide: TUI_VALUE_ACCESSOR,
    deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
    useFactory: identity,
};
