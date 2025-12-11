import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    type DoCheck,
    forwardRef,
    inject,
    SkipSelf,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {
    type TuiTreeController,
    type TuiTreeItemContext,
} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER, TUI_TREE_LEVEL, TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TUI_TREE_CONTENT} from '../tree-item-content/tree-item-content.component';

@Component({
    selector: 'tui-tree-item',
    imports: [PolymorpheusOutlet, TuiExpand],
    templateUrl: './tree-item.template.html',
    styleUrl: './tree-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiProvide(TUI_TREE_NODE, TuiTreeItem),
        {
            provide: TUI_TREE_LEVEL,
            deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
            useFactory: (level: number): number => ++level,
        },
    ],
    host: {
        role: 'treeitem',
        '[class._expandable]': 'isExpandable',
    },
})
export class TuiTreeItem implements DoCheck {
    private readonly nested = contentChildren(TUI_TREE_NODE);
    private readonly el = tuiInjectElement();
    private readonly change$ = new Subject<void>();
    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    protected readonly level = inject<number>(forwardRef(() => TUI_TREE_LEVEL));
    protected readonly content = inject<PolymorpheusContent<TuiTreeItemContext>>(
        forwardRef(() => TUI_TREE_CONTENT),
    );

    protected readonly attached = toSignal(
        this.change$.pipe(
            map(() => this.el.isConnected),
            distinctUntilChanged(),
        ),
        {initialValue: this.el.isConnected},
    );

    public readonly expanded = toSignal(
        this.change$.pipe(
            startWith(null),
            map(() => this.isExpanded),
            distinctUntilChanged(),
        ),
        {initialValue: this.isExpanded},
    );

    public get isExpandable(): boolean {
        return !!this.nested().length;
    }

    public get isExpanded(): boolean {
        return this.controller.isExpanded(this);
    }

    public ngDoCheck(): void {
        this.checkChanges();
    }

    public checkChanges(): void {
        this.change$.next();
    }
}
