import type {Provider, WritableSignal} from '@angular/core';
import {Directive, inject, Input, Optional, signal, SkipSelf} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

const DEFAULT = {
    appearance: 'textfield',
    size: 'l',
    cleaner: true,
} as const;

export interface TuiTextfieldOptions {
    readonly appearance: WritableSignal<string>;
    readonly size: WritableSignal<TuiSizeL | TuiSizeS>;
    readonly cleaner: WritableSignal<boolean>;
}

export const TUI_TEXTFIELD_OPTIONS = tuiCreateTokenFromFactory<TuiTextfieldOptions>(
    () => ({
        appearance: signal(DEFAULT.appearance),
        size: signal(DEFAULT.size),
        cleaner: signal(DEFAULT.cleaner),
    }),
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
export class TuiTextfieldOptionsDirective
    extends AbstractTuiController
    implements TuiTextfieldOptions
{
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true});

    // TODO: refactor to input signals after Angular update
    public appearance = signal(this.options.appearance());
    public size = signal(this.options.size());
    public cleaner = signal(this.options.cleaner());

    @Input()
    public set tuiTextfieldAppearance(appearance: string) {
        this.appearance.set(appearance);
    }

    @Input()
    public set tuiTextfieldSize(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    @Input()
    public set tuiTextfieldCleaner(enabled: boolean) {
        this.cleaner.set(enabled);
    }
}
