import {forwardRef, Provider, SkipSelf} from '@angular/core';

import {TUI_TREE_LEVEL} from '../../misc/tokens/tree-level.token';
import {TUI_TREE_NODE} from '../../misc/tokens/tree-node.token';
import {TuiTreeItemToken} from './tree-item.token';

export const TUI_TREE_ITEM_PROVIDERS: Provider[] = [
    {
        provide: TUI_TREE_LEVEL,
        deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
        useFactory: (level: number): number => ++level,
    },
    {
        provide: TUI_TREE_NODE,
        useExisting: forwardRef(() => TuiTreeItemToken),
    },
];
