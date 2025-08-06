import {
    Directive,
    type FactoryProvider,
    inject,
    InjectionToken,
    Input,
    type OnChanges,
    Optional,
    Self,
    SkipSelf,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {Subject} from 'rxjs';

export type TuiHintDirection =
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom'
    | 'left-bottom'
    | 'left-top'
    | 'left'
    | 'right-bottom'
    | 'right-top'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'top';

export const TUI_HINT_DIRECTIONS: readonly TuiHintDirection[] = [
    'bottom-left',
    'bottom',
    'bottom-right',
    'top-left',
    'top',
    'top-right',
    'left-top',
    'left',
    'left-bottom',
    'right-top',
    'right',
    'right-bottom',
];

export interface TuiHintOptions {
    readonly appearance: string;
    readonly direction: TuiHintDirection | TuiHintDirection[];
    readonly hideDelay: number;
    readonly icon: string;
    readonly showDelay: number;
}

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
    icon: '@tui.circle-help',
};

/**
 * Default parameters for hint directive
 */
export const TUI_HINT_OPTIONS = new InjectionToken(ngDevMode ? 'TUI_HINT_OPTIONS' : '', {
    factory: () => TUI_HINT_DEFAULT_OPTIONS,
});

export const tuiHintOptionsProvider: (
    options: Partial<TuiHintOptions>,
) => FactoryProvider = (override: Partial<TuiHintOptions>) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiHintOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS),
});

/**
 * @deprecated: drop in 5.0
 */
@Directive({
    standalone: true,
    selector: '[tuiHintContent]',
    providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)],
})
export class TuiHintOptionsDirective implements TuiHintOptions, OnChanges {
    private readonly options = inject(TUI_HINT_OPTIONS, {skipSelf: true});

    @Input('tuiHintContent')
    public content: PolymorpheusContent;

    @Input('tuiHintDirection')
    public direction = this.options.direction;

    @Input('tuiHintAppearance')
    public appearance = this.options.appearance;

    @Input('tuiHintShowDelay')
    public showDelay = this.options.showDelay;

    @Input('tuiHintHideDelay')
    public hideDelay = this.options.hideDelay;

    public icon = this.options.icon;

    public readonly change$ = new Subject<void>();

    public ngOnChanges(): void {
        this.change$.next();
    }
}
