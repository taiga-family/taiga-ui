import type {Provider} from '@angular/core';
import {forwardRef, SkipSelf} from '@angular/core';

import {TUI_TREE_LEVEL, TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItemComponent} from './tree-item.component';

export const TUI_TREE_ITEM_PROVIDERS: Provider[] = [
    {
        provide: TUI_TREE_LEVEL,
        deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
        useFactory: (level: number): number => ++level,
    },
    {
        provide: TUI_TREE_NODE,
        useExisting: forwardRef(() => TuiTreeItemComponent),
    },
];
