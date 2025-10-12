import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    type DoCheck,
    forwardRef,
    inject,
    Input,
    type TrackByFunction,
    ViewChild,
} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {TuiTreeChildren} from '../../directives/tree-children.directive';
import {TuiTreeNode} from '../../directives/tree-node.directive';
import {type TuiTreeContext} from '../../misc/tree.interfaces';
import {TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItem} from '../tree-item/tree-item.component';

@Component({
    selector: 'tui-tree',
    imports: [AsyncPipe, PolymorpheusOutlet, TuiLet, TuiTreeItem, TuiTreeNode],
    templateUrl: './tree.template.html',
    styleUrl: './tree.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)],
    host: {role: 'tree'},
})
export class TuiTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    @ViewChild(forwardRef(() => TuiTreeItem))
    protected readonly item?: TuiTreeItem;

    @ViewChild(forwardRef(() => TuiTreeComponent))
    protected readonly child?: TuiTreeComponent<T>;

    protected readonly children$ = this.check$.pipe(
        startWith(null),
        map(() => this.handler(this.value)),
        distinctUntilChanged(),
    );

    protected readonly directive = inject<TuiTreeChildren<T>>(TuiTreeChildren, {
        optional: true,
    });

    @Input({
        required: true,
    })
    public value!: T;

    @Input()
    public trackBy: TrackByFunction<T> = (_: number, item: T) => item;

    @Input()
    public content: PolymorpheusContent<TuiTreeContext<T>> = ({$implicit}) =>
        String($implicit);

    public ngDoCheck(): void {
        this.checkChanges();
    }

    protected checkChanges(): void {
        this.check$.next();
        this.item?.checkChanges();
        this.child?.checkChanges();
    }

    private get handler(): TuiHandler<T, readonly T[]> {
        return this.directive?.childrenHandler || TuiTreeChildren.defaultHandler;
    }
}
