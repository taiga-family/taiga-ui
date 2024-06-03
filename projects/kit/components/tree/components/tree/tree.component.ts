import type {DoCheck, TrackByFunction} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {tuiProvide} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {TuiTreeChildrenDirective} from '../../directives/tree-children.directive';
import type {TuiTreeContext} from '../../misc/tree.interfaces';
import {TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItemComponent} from '../tree-item/tree-item.component';

@Component({
    selector: 'tui-tree',
    templateUrl: './tree.template.html',
    styleUrls: ['./tree.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)],
    host: {role: 'tree'},
})
export class TuiTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    @ViewChild(forwardRef(() => TuiTreeItemComponent))
    protected readonly item?: TuiTreeItemComponent;

    @ViewChild(forwardRef(() => TuiTreeComponent))
    protected readonly child?: TuiTreeComponent<T>;

    protected readonly children$ = this.check$.pipe(
        startWith(null),
        map(() => this.handler(this.value)),
        distinctUntilChanged(),
    );

    protected readonly directive = inject<TuiTreeChildrenDirective<T>>(
        TuiTreeChildrenDirective,
        {
            optional: true,
        },
    );

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
        return this.directive?.childrenHandler || TuiTreeChildrenDirective.defaultHandler;
    }
}
