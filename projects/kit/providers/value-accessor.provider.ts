import {FactoryProvider, Optional, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {identity} from '@taiga-ui/cdk';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core/tokens';

export const IDENTITY = identity;

export const TUI_VALUE_ACCESSOR_PROVIDER: FactoryProvider = {
    provide: TUI_VALUE_ACCESSOR,
    deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
    useFactory: IDENTITY,
};
