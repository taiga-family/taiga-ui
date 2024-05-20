import type {DoCheck, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    inject,
    SkipSelf,
} from '@angular/core';
import {EMPTY_QUERY, tuiInjectElement, tuiProvide} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {
    TUI_TREE_CONTENT,
    TUI_TREE_CONTROLLER,
    TUI_TREE_LEVEL,
    TUI_TREE_NODE,
} from '../../misc/tree.tokens';

@Component({
    selector: 'tui-tree-item',
    templateUrl: './tree-item.template.html',
    styleUrls: ['./tree-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiProvide(TUI_TREE_NODE, TuiTreeItemComponent),
        {
            provide: TUI_TREE_LEVEL,
            deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
            useFactory: (level: number): number => ++level,
        },
    ],
    host: {
        role: 'treeitem',
    },
})
export class TuiTreeItemComponent implements DoCheck {
    @ContentChildren(TUI_TREE_NODE as any)
    private readonly nested: QueryList<unknown> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();

    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    private readonly change$ = new Subject<void>();

    protected readonly level = inject<number>(forwardRef(() => TUI_TREE_LEVEL));

    protected readonly content = inject<PolymorpheusContent<TuiTreeItemContext>>(
        forwardRef(() => TUI_TREE_CONTENT),
    );

    protected readonly expanded$ = this.change$.pipe(
        startWith(null),
        map(() => this.isExpanded),
    );

    protected readonly attached$ = this.change$.pipe(
        map(() => this.el.isConnected),
        distinctUntilChanged(),
    );

    @HostBinding('class._expandable')
    public get isExpandable(): boolean {
        return !!this.nested.length;
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
