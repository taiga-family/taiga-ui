import type {Provider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

/**
 * Token to exclude inherited documentation properties
 */
export const TUI_DOC_EXCLUDED_PROPERTIES = tuiCreateToken<Set<string>>(new Set([]));

export function tuiDocExcludeProperties(properties: readonly string[]): Provider {
    return {provide: TUI_DOC_EXCLUDED_PROPERTIES, useValue: new Set(properties)};
}
