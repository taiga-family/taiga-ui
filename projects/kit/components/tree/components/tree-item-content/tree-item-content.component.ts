import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Inject,
} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../../misc/tree.constants';
import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../../misc/tree.tokens';

@Component({
    selector: `tui-tree-item-content`,
    templateUrl: `tree-item-content.template.html`,
    styleUrls: [`tree-item-content.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTreeItemContentComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiTreeItemContext,
        @Inject(forwardRef(() => TUI_TREE_CONTROLLER))
        private readonly controller: TuiTreeController,
    ) {}

    get isExpanded(): boolean {
        return this.context.$implicit.isExpanded;
    }

    @HostBinding(`class._expandable`)
    get isExpandable(): boolean {
        return (
            this.context.$implicit.isExpandable &&
            this.controller !== TUI_DEFAULT_TREE_CONTROLLER
        );
    }

    onClick(): void {
        this.controller.toggle(this.context.$implicit);
    }
}
