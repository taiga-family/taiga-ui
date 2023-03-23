import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';

/**
 * Token to exclude inherited documentation properties
 */
export const TUI_DOC_EXCLUDED_PROPERTIES = new InjectionToken<Set<string>>(
    `[TUI_DOC_EXCLUDED_PROPERTIES]`,
    {factory: () => new Set([])},
);

export function tuiDocExcludeProperties(properties: readonly string[]): Provider {
    return {provide: TUI_DOC_EXCLUDED_PROPERTIES, useValue: new Set(properties)};
}
