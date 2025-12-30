import {
    ChangeDetectionStrategy,
    Component,
    type DoCheck,
    inject,
    input,
    type TrackByFunction,
    viewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_STRINGIFY} from '@taiga-ui/cdk/constants';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, Subject} from 'rxjs';

import {TuiTreeChildren} from '../../directives/tree-children.directive';
import {TuiTreeNode} from '../../directives/tree-node.directive';
import {type TuiTreeContext} from '../../misc/tree.interfaces';
import {TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItem} from '../tree-item/tree-item.component';

@Component({
    selector: 'tui-tree',
    imports: [PolymorpheusOutlet, TuiTreeItem, TuiTreeNode],
    templateUrl: './tree.template.html',
    styleUrl: './tree.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)],
    host: {role: 'tree'},
})
export class TuiTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    protected readonly item = viewChild(TuiTreeItem);
    protected readonly child = viewChild(TuiTreeComponent);
    protected readonly children = toSignal(
        this.check$.pipe(
            map(() => this.handler(this.value())),
            distinctUntilChanged(),
        ),
        {initialValue: []},
    );

    protected readonly directive = inject<TuiTreeChildren<T>>(TuiTreeChildren, {
        optional: true,
    });

    public readonly value = input.required<T>();
    public readonly trackBy = input<TrackByFunction<T>>((_: number, item) => item);
    public readonly content =
        input<PolymorpheusContent<TuiTreeContext<T>>>(TUI_STRINGIFY);

    public ngDoCheck(): void {
        this.checkChanges();
    }

    protected checkChanges(): void {
        this.check$.next();
        this.item()?.checkChanges();
        this.child()?.checkChanges();
    }

    private get handler(): TuiHandler<T, readonly T[]> {
        return this.directive?.childrenHandler() || TuiTreeChildren.defaultHandler;
    }
}
