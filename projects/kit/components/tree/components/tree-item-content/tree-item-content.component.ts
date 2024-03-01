import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    inject,
} from '@angular/core';
import {TUI_COMMON_ICONS} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../../misc/tree.constants';
import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../../misc/tree.tokens';

@Component({
    selector: 'tui-tree-item-content',
    templateUrl: './tree-item-content.template.html',
    styleUrls: ['./tree-item-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTreeItemContentComponent {
    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context = inject<TuiTreeItemContext>(POLYMORPHEUS_CONTEXT);

    @HostBinding('class._expandable')
    protected get isExpandable(): boolean {
        return (
            this.context.$implicit.isExpandable &&
            this.controller !== TUI_DEFAULT_TREE_CONTROLLER
        );
    }

    protected get isExpanded(): boolean {
        return this.context.$implicit.isExpanded;
    }

    protected onClick(): void {
        this.controller.toggle(this.context.$implicit);
    }
}
