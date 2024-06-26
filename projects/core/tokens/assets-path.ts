import type {ValueProvider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_ASSETS_PATH = tuiCreateToken('assets/taiga-ui/icons');

export function tuiAssetsPathProvider(useValue: string): ValueProvider {
    return {
        provide: TUI_ASSETS_PATH,
        useValue,
    };
}
