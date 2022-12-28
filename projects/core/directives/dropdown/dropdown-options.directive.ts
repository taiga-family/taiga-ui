import {
    Directive,
    FactoryProvider,
    forwardRef,
    Inject,
    InjectionToken,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';

export interface TuiDropdownOptions {
    readonly align: TuiHorizontalDirection;
    readonly direction: TuiVerticalDirection | null;
    readonly limitWidth: TuiDropdownWidth;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly offset: number;
}

/** Default values for dropdown options */
export const TUI_DROPDOWN_DEFAULT_OPTIONS: TuiDropdownOptions = {
    align: 'left',
    direction: null,
    limitWidth: 'auto',
    maxHeight: 400,
    minHeight: 80,
    offset: 4,
};

export const TUI_DROPDOWN_OPTIONS = new InjectionToken<TuiDropdownOptions>(
    '[TUI_DROPDOWN_OPTIONS] Default parameters for dropdown directive',
    {
        factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS,
    },
);

export const tuiDropdownOptionsProvider: (
    options: Partial<TuiDropdownOptions>,
) => FactoryProvider = (override: Partial<TuiDropdownOptions>) => ({
    provide: TUI_DROPDOWN_OPTIONS,
    deps: [
        [new Optional(), TuiDropdownOptionsDirective],
        [new SkipSelf(), TUI_DROPDOWN_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override),
});

@Directive({
    selector: '[tuiDropdownAlign], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]',
    providers: [
        {
            provide: TUI_DROPDOWN_OPTIONS,
            useExisting: forwardRef(() => TuiDropdownOptionsDirective),
        },
    ],
})
export class TuiDropdownOptionsDirective implements TuiDropdownOptions {
    @Input('tuiDropdownAlign')
    @tuiDefaultProp()
    align = this.options.align;

    @Input('tuiDropdownDirection')
    @tuiDefaultProp()
    direction = this.options.direction;

    @Input('tuiDropdownLimitWidth')
    @tuiDefaultProp()
    limitWidth = this.options.limitWidth;

    @Input('tuiDropdownMinHeight')
    @tuiDefaultProp()
    minHeight = this.options.minHeight;

    @Input('tuiDropdownMaxHeight')
    @tuiDefaultProp()
    maxHeight = this.options.maxHeight;

    @Input('tuiDropdownOffset')
    @tuiDefaultProp()
    offset = this.options.offset;

    constructor(
        @SkipSelf()
        @Inject(TUI_DROPDOWN_OPTIONS)
        private readonly options: TuiDropdownOptions,
    ) {}
}
