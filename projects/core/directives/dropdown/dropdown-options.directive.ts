import {
    Directive,
    type FactoryProvider,
    forwardRef,
    inject,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';
import {
    type TuiDropdownAlign,
    type TuiDropdownWidth,
    type TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';

export interface TuiDropdownOptions {
    readonly align: TuiDropdownAlign;
    readonly appearance: string;
    readonly direction: TuiVerticalDirection | null;
    readonly limitWidth: TuiDropdownWidth;
    readonly maxHeight: number;
    readonly minHeight: number;
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
    appearance: '',
};

/**
 * Default parameters for dropdown directive
 */
export const TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);

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
    standalone: true,
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
    private readonly options = inject(TUI_DROPDOWN_OPTIONS, {skipSelf: true});

    @Input('tuiDropdownAlign')
    public align = this.options.align;

    @Input('tuiDropdownAppearance')
    public appearance = this.options.appearance;

    @Input('tuiDropdownDirection')
    public direction = this.options.direction;

    @Input('tuiDropdownLimitWidth')
    public limitWidth = this.options.limitWidth;

    @Input('tuiDropdownMinHeight')
    public minHeight = this.options.minHeight;

    @Input('tuiDropdownMaxHeight')
    public maxHeight = this.options.maxHeight;

    @Input('tuiDropdownOffset')
    public offset = this.options.offset;
}
