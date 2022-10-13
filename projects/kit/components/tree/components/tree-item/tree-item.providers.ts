import {forwardRef, Provider, SkipSelf} from '@angular/core';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TUI_TREE_LEVEL, TUI_TREE_NODE} from '../../misc/tree.tokens';
// eslint-disable-next-line import/no-cycle
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
