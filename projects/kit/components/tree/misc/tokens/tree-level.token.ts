import {InjectionToken} from '@angular/core';

export const TUI_TREE_LEVEL = new InjectionToken<number>(
    `[TUI_TREE_LEVEL]: Nesting level of current TreeView node`,
    {
        factory: () => -1,
    },
);
