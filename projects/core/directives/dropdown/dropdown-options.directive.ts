import {
    Directive,
    FactoryProvider,
    forwardRef,
    Inject,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk';
import {
    TuiDropdownAlign,
    TuiDropdownWidth,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';

export interface TuiDropdownOptions {
    readonly align: TuiDropdownAlign;
    readonly direction: TuiVerticalDirection | null;
    readonly limitWidth: TuiDropdownWidth;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly offset: number;
    readonly appearance: string;
}

/** Default values for dropdown options */
export const TUI_DROPDOWN_DEFAULT_OPTIONS: TuiDropdownOptions = {
    align: 'left',
    direction: null,
    limitWidth: 'auto',
    maxHeight: 400,
    minHeight: 80,
    offset: 4,
    appearance: '',
};

/**
 * Default parameters for dropdown directive
 */
export const TUI_DROPDOWN_OPTIONS = tuiCreateOptions(TUI_DROPDOWN_DEFAULT_OPTIONS);

export const tuiDropdownOptionsProvider: (
    options: Partial<TuiDropdownOptions>,
) => FactoryProvider = (override: Partial<TuiDropdownOptions>) => ({
    provide: TUI_DROPDOWN_OPTIONS,
    deps: [
        [new Optional(), TuiDropdownOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS),
});

@Directive({
    selector:
        '[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]',
    providers: [
        {
            provide: TUI_DROPDOWN_OPTIONS,
            useExisting: forwardRef(() => TuiDropdownOptionsDirective),
        },
    ],
})
export class TuiDropdownOptionsDirective implements TuiDropdownOptions {
    @Input('tuiDropdownAlign')
    align = this.options.align;

    @Input('tuiDropdownAppearance')
    appearance = this.options.appearance;

    @Input('tuiDropdownDirection')
    direction = this.options.direction;

    @Input('tuiDropdownLimitWidth')
    limitWidth = this.options.limitWidth;

    @Input('tuiDropdownMinHeight')
    minHeight = this.options.minHeight;

    @Input('tuiDropdownMaxHeight')
    maxHeight = this.options.maxHeight;

    @Input('tuiDropdownOffset')
    offset = this.options.offset;

    constructor(
        @SkipSelf()
        @Inject(TUI_DROPDOWN_OPTIONS)
        private readonly options: TuiDropdownOptions,
    ) {}
}
