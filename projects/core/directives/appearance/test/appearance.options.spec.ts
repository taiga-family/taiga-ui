import {InjectionToken, Injector} from '@angular/core';
import {
    TUI_APPEARANCE_OPTIONS,
    type TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';

declare const ngDevMode: boolean;

describe('tuiAppearanceOptionsProvider', () => {
    it.each(['', 'textfield'])('provides "%s" appearance from options', (appearance) => {
        const injector = Injector.create({
            providers: [tuiAppearanceOptionsProvider({appearance})],
        });

        expect(injector.get(TUI_APPEARANCE_OPTIONS).appearance).toBe(appearance);
    });

    it('reuses options provided by an injection token', () => {
        const token = new InjectionToken<TuiAppearanceOptions>(
            ngDevMode ? '[token]: Options' : '',
        );

        const options = {appearance: 'primary'};
        const injector = Injector.create({
            providers: [
                {provide: token, useValue: options},
                tuiAppearanceOptionsProvider(token),
            ],
        });

        expect(injector.get(TUI_APPEARANCE_OPTIONS)).toBe(options);
    });

    it('reuses options provided by a class', () => {
        class Options implements TuiAppearanceOptions {
            public readonly appearance = 'outline';
        }

        const injector = Injector.create({
            providers: [Options, tuiAppearanceOptionsProvider(Options)],
        });

        expect(injector.get(TUI_APPEARANCE_OPTIONS)).toBe(injector.get(Options));
    });
});
