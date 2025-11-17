import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    InjectionToken,
} from '@angular/core';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {
    injectContext,
    PolymorpheusComponent,
    type PolymorpheusContent,
} from '@taiga-ui/polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../../misc/tree.constants';
import {
    type TuiTreeController,
    type TuiTreeItemContext,
} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../../misc/tree.tokens';

@Component({
    imports: [NgTemplateOutlet, TuiButton],
    templateUrl: './tree-item-content.template.html',
    styleUrl: './tree-item-content.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expandable]': 'isExpandable',
    },
})
export class TuiTreeItemContent {
    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly more = inject(TUI_MORE_WORD);
    protected readonly context = injectContext<TuiTreeItemContext>();

    protected get isExpandable(): boolean {
        return (
            this.context.$implicit.isExpandable &&
            this.controller !== TUI_DEFAULT_TREE_CONTROLLER
        );
    }

    protected onClick(): void {
        this.controller.toggle(this.context.$implicit);
    }
}

export const TUI_TREE_ITEM_CONTENT = new PolymorpheusComponent(TuiTreeItemContent);

/**
 * Content for a tree item
 */
export const TUI_TREE_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiTreeItemContext>
>(ngDevMode ? 'TUI_TREE_CONTENT' : '', {
    factory: () => TUI_TREE_ITEM_CONTENT,
});
