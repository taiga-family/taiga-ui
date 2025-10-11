import {
    Directive,
    inject,
    InjectionToken,
    Input,
    Optional,
    type Provider,
    type Signal,
    signal,
    SkipSelf,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
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
    standalone: true,
    selector: '[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)],
})
export class TuiTextfieldOptionsDirective implements TuiTextfieldOptions {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true});

    public readonly appearance = input(this.options.appearance(), {
        alias: 'tuiTextfieldAppearance',
    });

    public readonly size = input(this.options.size(), {
        alias: 'tuiTextfieldSize',
        transform: (size: TuiSizeL | TuiSizeS | ''): TuiSizeL | TuiSizeS =>
            size || DEFAULT.size,
    });

    public readonly cleaner = input(this.options.cleaner(), {
        alias: 'tuiTextfieldCleaner',
    });
}
