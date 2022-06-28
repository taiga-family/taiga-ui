import {Directive, Optional} from '@angular/core';
import {
    ControlValueAccessor,
    DefaultValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core/tokens';

/**
 * @deprecated: use {@link tuiFallbackAccessorFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function fallbackAccessorFactory(
    accessor: readonly ControlValueAccessor[] | null,
    fallback: ControlValueAccessor,
): ControlValueAccessor {
    return accessor ? accessor[0] : fallback;
}

export const tuiFallbackAccessorFactory = fallbackAccessorFactory;

@Directive({
    selector: 'input[tuiMaskAccessor]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            deps: [[new Optional(), TUI_VALUE_ACCESSOR], DefaultValueAccessor],
            useFactory: fallbackAccessorFactory,
            multi: true,
        },
    ],
})
export class TuiMaskAccessorDirective {}
