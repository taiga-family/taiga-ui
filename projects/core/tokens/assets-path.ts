import type {ValueProvider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_ASSETS_PATH = tuiCreateToken('assets/taiga-ui');

export function tuiAssetsPathProvider(useValue: string): ValueProvider {
    return {
        provide: TUI_ASSETS_PATH,
        useValue,
    };
}
