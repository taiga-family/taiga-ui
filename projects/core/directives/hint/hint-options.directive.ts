import {
    Directive,
    FactoryProvider,
    forwardRef,
    Inject,
    Input,
    Optional,
    SkipSelf,
} from '@angular/core';
import {AbstractTuiController, tuiCreateToken} from '@taiga-ui/cdk';
import {TuiHintDirection} from '@taiga-ui/core/types';
import {tuiOverrideOptions} from '@taiga-ui/core/utils';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    @Input()
    tuiHintContent: PolymorpheusContent;

    /**
     * @deprecated use {@link tuiHintContent}
     */
    set content(val: PolymorpheusContent) {
        this.tuiHintContent = val;
    }

    /**
     * @deprecated use {@link tuiHintContent}
     */
    get content(): PolymorpheusContent {
        return this.tuiHintContent;
    }

    @Input()
    tuiHintDirection = this.options.direction;

    /**
     * @deprecated use {@link tuiHintDirection}
     */
    set direction(val: TuiHintDirection) {
        this.tuiHintDirection = val;
    }

    /**
     * @deprecated use {@link tuiHintDirection}
     */
    get direction(): TuiHintDirection {
        return this.tuiHintDirection;
    }

    @Input()
    tuiHintAppearance = this.options.appearance;

    /**
     * @deprecated use {@link tuiHintAppearance}
     */
    set appearance(val: string) {
        this.tuiHintAppearance = val;
    }

    /**
     * @deprecated use {@link tuiHintAppearance}
     */
    get appearance(): string {
        return this.tuiHintAppearance;
    }

    @Input()
    tuiHintShowDelay = this.options.showDelay;

    /**
     * @deprecated use {@link tuiHintShowDelay}
     */
    set showDelay(val: number) {
        this.tuiHintShowDelay = val;
    }

    /**
     * @deprecated use {@link tuiHintShowDelay}
     */
    get showDelay(): number {
        return this.tuiHintShowDelay;
    }

    @Input()
    tuiHintHideDelay = this.options.hideDelay;

    /**
     * @deprecated use {@link tuiHintHideDelay}
     */
    set hideDelay(val: number) {
        this.tuiHintHideDelay = val;
    }

    /**
     * @deprecated use {@link tuiHintHideDelay}
     */
    get hideDelay(): number {
        return this.tuiHintHideDelay;
    }

    icon = this.options.icon;

    constructor(
        @SkipSelf() @Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions,
    ) {
        super();
    }
}
