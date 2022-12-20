import {InjectionToken, Provider} from '@angular/core';

export const TUI_DOC_EXCLUDED_PROPERTIES = new InjectionToken<readonly string[]>(
    `[TUI_DOC_EXCLUDED_PROPERTIES]: [TUI_PROPERTY_EXCLUSION]: Token to exclude inherited documentation properties`,
    {factory: () => []},
);

export function tuiExcludeProperties(useValue: readonly string[]): Provider {
    return {provide: TUI_DOC_EXCLUDED_PROPERTIES, useValue};
}
