import {
    Directive,
    type FactoryProvider,
    forwardRef,
    inject,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {AbstractTuiController, tuiCreateToken} from '@taiga-ui/cdk';
import {type TuiHintDirection} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHintOptions {
    readonly appearance: string;
    readonly direction: TuiHintDirection;
    readonly hideDelay: number;
    readonly icon: PolymorpheusContent;
    readonly showDelay: number;
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
export const TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);

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
}
