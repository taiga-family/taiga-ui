import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    forwardRef,
    HostBinding,
    inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {
    TUI_TREE_CONTENT,
    TUI_TREE_CONTROLLER,
    TUI_TREE_LEVEL,
    TUI_TREE_NODE,
} from '../../misc/tree.tokens';
import {TUI_TREE_ITEM_PROVIDERS} from './tree-item.providers';

@Component({
    selector: 'tui-tree-item',
    templateUrl: './tree-item.template.html',
    styleUrls: ['./tree-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TREE_ITEM_PROVIDERS,
    host: {
        role: 'treeitem',
    },
})
export class TuiTreeItemComponent implements DoCheck {
    @ContentChildren(TUI_TREE_NODE as any)
    private readonly nested: QueryList<unknown> = EMPTY_QUERY;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    private readonly change$ = new Subject<void>();

    readonly level = inject<number>(forwardRef(() => TUI_TREE_LEVEL));

    readonly content = inject<PolymorpheusContent<TuiTreeItemContext>>(
        forwardRef(() => TUI_TREE_CONTENT),
    );

    readonly expanded$ = this.change$.pipe(
        startWith(null),
        map(() => this.isExpanded),
    );

    readonly attached$ = this.change$.pipe(
        map(() => this.el.isConnected),
        distinctUntilChanged(),
    );

    @HostBinding('class._expandable')
    get isExpandable(): boolean {
        return !!this.nested.length;
    }

    get isExpanded(): boolean {
        return this.controller.isExpanded(this);
    }

    ngDoCheck(): void {
        this.checkChanges();
    }

    checkChanges(): void {
        this.change$.next();
    }
}
