import {
    Directive,
    FactoryProvider,
    forwardRef,
    Inject,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {AbstractTuiController, tuiCreateOptions} from '@taiga-ui/cdk';
import {TuiHintDirection} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHintOptions {
    readonly direction: TuiHintDirection;
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly appearance: string;
    readonly icon: PolymorpheusContent;
}

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    icon: 'tuiIconHelpCircle',
};

/**
 * Default parameters for hint directive
 */
export const TUI_HINT_OPTIONS = tuiCreateOptions(TUI_HINT_DEFAULT_OPTIONS);

export const tuiHintOptionsProvider: (
    options: Partial<TuiHintOptions>,
) => FactoryProvider = (override: Partial<TuiHintOptions>) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [
        [new Optional(), TuiHintOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS),
});

@Directive({
    selector: '[tuiHintContent]',
    providers: [
        {
            provide: TUI_HINT_OPTIONS,
            useExisting: forwardRef(() => TuiHintOptionsDirective),
        },
    ],
})
export class TuiHintOptionsDirective
    extends AbstractTuiController
    implements TuiHintOptions
{
    @Input('tuiHintContent')
    content: PolymorpheusContent;

    @Input('tuiHintDirection')
    direction = this.options.direction;

    @Input('tuiHintAppearance')
    appearance = this.options.appearance;

    @Input('tuiHintShowDelay')
    showDelay = this.options.showDelay;

    @Input('tuiHintHideDelay')
    hideDelay = this.options.hideDelay;

    icon = this.options.icon;

    constructor(
        @SkipSelf() @Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions,
    ) {
        super();
    }
}
