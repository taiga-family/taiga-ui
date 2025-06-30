import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_ASSETS_PATH = new InjectionToken('TUI_ASSETS_PATH', {
    factory: () => 'assets/taiga-ui/icons',
});

export function tuiAssetsPathProvider(useValue: string): ValueProvider {
    return {
        provide: TUI_ASSETS_PATH,
        useValue,
    };
}
