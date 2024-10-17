import {NgIf, NgTemplateOutlet} from '@angular/common';
import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, forwardRef, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {injectContext} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../../misc/tree.constants';
import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../../misc/tree.tokens';

@Component({
    standalone: true,
    imports: [NgIf, NgTemplateOutlet, TuiButton],
    templateUrl: './tree-item-content.template.html',
    styleUrls: ['./tree-item-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expandable]': 'isExpandable',
    },
})
export class TuiTreeItemContent implements DoCheck {
    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    private readonly change$ = new Subject<void>();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly more = toSignal(inject(TUI_MORE_WORD));
    protected readonly context = injectContext<TuiTreeItemContext>();

    protected readonly expanded = toSignal(
        this.change$.pipe(
            startWith(null),
            map(() => this.isExpanded),
            distinctUntilChanged(),
        ),
        {initialValue: this.isExpanded},
    );

    public ngDoCheck(): void {
        this.change$.next();
    }

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
