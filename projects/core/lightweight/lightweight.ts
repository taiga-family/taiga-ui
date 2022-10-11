import {ExistingProvider, Type} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiLightweightToken {
    /**
     * @note: thus, we can specify that the passed class
     * must necessarily inherit from TuiLightweightToken
     */
    declare ['constructor']: typeof TuiLightweightToken;
}

export function tuiLightweightToken<T>(
    provide: Type<TuiLightweightToken>,
    useExisting: Type<T>,
): ExistingProvider {
    return {
        provide,
        useExisting,
    };
}
