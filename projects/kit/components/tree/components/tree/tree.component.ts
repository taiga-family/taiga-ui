import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    Inject,
    Input,
    Optional,
    ViewChild,
} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiTreeChildrenDirective} from '../../directives/tree-children.directive';
import {TuiTreeContext} from '../../misc/tree.interfaces';
import {TUI_TREE_NODE} from '../../misc/tree.tokens';
import {TuiTreeItemComponent} from '../tree-item/tree-item.component';

@Component({
    selector: 'tui-tree[value]',
    templateUrl: 'tree.template.html',
    styleUrls: ['tree.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_TREE_NODE,
            useExisting: TuiTreeComponent,
        },
    ],
    host: {
        role: 'tree',
    },
})
export class TuiTreeComponent<T> implements DoCheck {
    @Input()
    value!: T;

    @Input()
    content: PolymorpheusContent<TuiTreeContext<T>> = ({$implicit}) => String($implicit);

    @ViewChild(TuiTreeItemComponent)
    readonly item?: TuiTreeItemComponent;

    @ViewChild(TuiTreeComponent)
    readonly child?: TuiTreeComponent<T>;

    constructor(
        @Optional()
        @Inject(TuiTreeChildrenDirective)
        readonly directive: TuiTreeChildrenDirective<T> | null,
    ) {}

    get children(): readonly T[] {
        return (
            this.directive?.childrenHandler(this.value) ??
            TuiTreeChildrenDirective.defaultHandler(this.value)
        );
    }

    ngDoCheck() {
        this.item?.ngDoCheck();
        this.child?.ngDoCheck();
    }
}
