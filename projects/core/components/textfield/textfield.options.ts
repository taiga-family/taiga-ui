import {
    computed,
    Directive,
    inject,
    InjectionToken,
    input,
    Optional,
    type Provider,
    type Signal,
    signal,
    SkipSelf,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

const DEFAULT = {appearance: 'textfield', size: 'l', cleaner: true} as const;

export interface TuiTextfieldOptions {
    readonly appearance: Signal<string>;
    readonly size: Signal<TuiSizeL | TuiSizeS>;
    readonly cleaner: Signal<boolean>;
}

export const TUI_TEXTFIELD_OPTIONS = new InjectionToken<TuiTextfieldOptions>(
    ngDevMode ? 'TUI_TEXTFIELD_OPTIONS' : '',
    {
        factory: () => ({
            appearance: signal(DEFAULT.appearance),
            size: signal(DEFAULT.size),
            cleaner: signal(DEFAULT.cleaner),
        }),
    },
);

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return {
        provide: TUI_TEXTFIELD_OPTIONS,
        deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
        useFactory: (parent: TuiTextfieldOptions | null) => ({
            appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
            size: signal(parent?.size() ?? DEFAULT.size),
            cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner),
            ...options,
        }),
    };
}

@Directive({
    selector: '[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)],
})
export class TuiTextfieldOptionsDirective implements TuiTextfieldOptions {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true});
    private readonly appearanceInput = input<string | undefined>(undefined, {
        alias: 'tuiTextfieldAppearance',
    });
    private readonly sizeInput = input<TuiSizeL | TuiSizeS | '' | undefined>(undefined, {
        alias: 'tuiTextfieldSize',
    });
    private readonly cleanerInput = input<boolean | undefined>(undefined, {
        alias: 'tuiTextfieldCleaner',
    });

    public readonly appearance = computed(
        () => this.appearanceInput() ?? this.options.appearance(),
    );

    public readonly size = computed<TuiSizeL | TuiSizeS>(() => {
        const size = this.sizeInput();

        return size === undefined ? this.options.size() : size || DEFAULT.size;
    });

    public readonly cleaner = computed(
        () => this.cleanerInput() ?? this.options.cleaner(),
    );
}
