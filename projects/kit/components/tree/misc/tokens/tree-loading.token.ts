import {InjectionToken} from '@angular/core';

export const TUI_TREE_LOADING = new InjectionToken(
    `[TUI_TREE_LOADING]: A tree node placeholder for loading`,
    {factory: () => ({})},
);
