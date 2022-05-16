import {FactoryProvider, Optional, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core';
import {identity} from 'rxjs';

// TODO: 3.0 remove in ivy compilation
export const IDENTITY = identity;

export const TUI_VALUE_ACCESSOR_PROVIDER: FactoryProvider = {
    provide: TUI_VALUE_ACCESSOR,
    deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
    useFactory: IDENTITY,
};
