import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {tuiLightweightToken} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {TUI_TREE_CONTENT} from '../../misc/tokens/tree-content.token';
import {TUI_TREE_CONTROLLER} from '../../misc/tokens/tree-controller.token';
import {TUI_TREE_LEVEL} from '../../misc/tokens/tree-level.token';
import {TUI_TREE_NODE} from '../../misc/tokens/tree-node.token';
import {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {TUI_TREE_ITEM_PROVIDERS} from './tree-item.providers';
import {TuiTreeItemToken} from './tree-item.token';

@Component({
    selector: `tui-tree-item`,
    templateUrl: `./tree-item.template.html`,
    styleUrls: [`./tree-item.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiLightweightToken(TuiTreeItemToken, TuiTreeItemComponent),
        ...TUI_TREE_ITEM_PROVIDERS,
    ],
    host: {
        role: `treeitem`,
    },
})
export class TuiTreeItemComponent implements DoCheck {
    @ContentChildren(TUI_TREE_NODE as any)
    private readonly nested: QueryList<unknown> = EMPTY_QUERY;

    private readonly change$ = new Subject<void>();

    readonly expanded$ = this.change$.pipe(
        startWith(null),
        map(() => this.isExpanded),
        distinctUntilChanged(),
    );

    readonly attached$ = this.change$.pipe(
        map(() => this.elementRef.nativeElement.isConnected),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(forwardRef(() => TUI_TREE_CONTROLLER))
        private readonly controller: TuiTreeController,
        @Inject(forwardRef(() => TUI_TREE_LEVEL))
        readonly level: number,
        @Inject(forwardRef(() => TUI_TREE_CONTENT))
        readonly content: PolymorpheusContent<TuiTreeItemContext>,
    ) {}

    @HostBinding(`class._expandable`)
    get isExpandable(): boolean {
        return !!this.nested.length;
    }

    get isExpanded(): boolean {
        return this.controller.isExpanded(this);
    }

    ngDoCheck(): void {
        this.change$.next();
    }
}
