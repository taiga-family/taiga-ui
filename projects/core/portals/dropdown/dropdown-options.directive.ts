import {
    Directive,
    type FactoryProvider,
    inject,
    InjectionToken,
    Optional,
    Self,
    SkipSelf,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiVerticalDirection} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils/miscellaneous';

export type TuiDropdownAlign = 'center' | 'end' | 'start';
export type TuiDropdownWidth = 'auto' | 'fixed' | 'min';

export interface TuiDropdownOptions {
    readonly align: TuiDropdownAlign;
    readonly appearance: string;
    readonly direction: TuiVerticalDirection | null;
    readonly limitWidth: TuiDropdownWidth;
    readonly maxHeight: number;
    readonly minHeight: number;
    readonly offset: number;
}

export const TUI_DROPDOWN_DEFAULT_OPTIONS: TuiDropdownOptions = {
    align: 'start',
    direction: null,
    limitWidth: 'auto',
    maxHeight: 400,
    minHeight: 80,
    offset: 4,
    appearance: '',
};

export const TUI_DROPDOWN_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_DROPDOWN_OPTIONS' : '',
    {
        factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS,
    },
);

export const tuiDropdownOptionsProvider: (
    options: Partial<TuiDropdownOptions>,
) => FactoryProvider = (override: Partial<TuiDropdownOptions>) => ({
    provide: TUI_DROPDOWN_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiDropdownOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS),
});

@Directive({
    selector:
        '[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]',
    inputs: [
        'align: tuiDropdownAlign',
        'appearance: tuiDropdownAppearance',
        'direction: tuiDropdownDirection',
        'limitWidth: tuiDropdownLimitWidth',
        'minHeight: tuiDropdownMinHeight',
        'maxHeight: tuiDropdownMaxHeight',
        'offset: tuiDropdownOffset',
    ],
    providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)],
})
export class TuiDropdownOptionsDirective implements TuiDropdownOptions {
    private readonly options = inject(TUI_DROPDOWN_OPTIONS, {skipSelf: true});

    public align = this.options.align;
    public appearance = this.options.appearance;
    public direction = this.options.direction;
    public limitWidth = this.options.limitWidth;
    public minHeight = this.options.minHeight;
    public maxHeight = this.options.maxHeight;
    public offset = this.options.offset;
}
