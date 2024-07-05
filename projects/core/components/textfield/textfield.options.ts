import {Provider, signal, WritableSignal} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {
    tuiCreateToken,
    tuiProvide,
    tuiProvideOptions,
} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiTextfieldOptions extends TuiAppearanceOptions {
    readonly appearance: WritableSignal<string>;
    readonly size: WritableSignal<TuiSizeL | TuiSizeS>;
    readonly cleaner: WritableSignal<boolean>;
}

export const TUI_TEXTFIELD_DEFAULT_OPTIONS: TuiTextfieldOptions = {
    appearance: signal('textfield'),
    size: signal('l'),
    cleaner: signal(true),
};

export const TUI_TEXTFIELD_OPTIONS = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);

export function tuiTextfieldOptionsProvider(
    options: Partial<TuiTextfieldOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TEXTFIELD_OPTIONS,
        options,
        TUI_TEXTFIELD_DEFAULT_OPTIONS,
    );
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

    @Input()
    public set tuiTextfieldAppearance(appearance: string) {
        this.appearance.set(appearance);
    }

    @Input()
    public set tuiTextfieldSize(size: TuiSizeS | TuiSizeL) {
        this.size.set(size);
    }

    @Input()
    public set tuiTextfieldCleaner(enabled: boolean) {
        this.cleaner.set(enabled);
    }

    // TODO: refactor to input signals after Angular update
    public appearance = this.options.appearance;
    public size = this.options.size;
    public cleaner = this.options.cleaner;
}
