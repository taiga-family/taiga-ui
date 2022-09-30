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
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
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
    direction: `bottom-left`,
    showDelay: 500,
    hideDelay: 200,
    appearance: ``,
    icon: `tuiIconTooltipLarge`,
};

export const TUI_HINT_OPTIONS = new InjectionToken<TuiHintOptions>(
    `[TUI_HINT_OPTIONS] Default parameters for hint directive`,
    {
        factory: () => TUI_HINT_DEFAULT_OPTIONS,
    },
);

export const tuiHintOptionsProvider: (
    options: Partial<TuiHintOptions>,
) => FactoryProvider = (override: Partial<TuiHintOptions>) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [
        [new Optional(), TuiHintOptionsDirective],
        [new SkipSelf(), TUI_HINT_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override),
});

@Directive({
    selector: `[tuiHintContent]`,
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
    @Input(`tuiHintContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction = this.options.direction;

    @Input(`tuiHintAppearance`)
    @tuiDefaultProp()
    appearance = this.options.appearance;

    @Input(`tuiHintShowDelay`)
    @tuiDefaultProp()
    showDelay = this.options.showDelay;

    @Input(`tuiHintHideDelay`)
    @tuiDefaultProp()
    hideDelay = this.options.hideDelay;

    icon = this.options.icon;

    constructor(
        @SkipSelf() @Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions,
    ) {
        super();
    }
}
