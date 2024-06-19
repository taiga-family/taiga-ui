import {AsyncPipe, NgIf, NgTemplateOutlet} from '@angular/common';
import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    inject,
} from '@angular/core';
import {TUI_COMMON_ICONS, TuiButton} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, startWith, Subject} from 'rxjs';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../../misc/tree.constants';
import type {TuiTreeController, TuiTreeItemContext} from '../../misc/tree.interfaces';
import {TUI_TREE_CONTROLLER} from '../../misc/tree.tokens';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, NgTemplateOutlet, AsyncPipe],
    templateUrl: './tree-item-content.template.html',
    styleUrls: ['./tree-item-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTreeItemContent implements DoCheck {
    private readonly controller = inject<TuiTreeController>(
        forwardRef(() => TUI_TREE_CONTROLLER),
    );

    private readonly change$ = new Subject<void>();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context = inject<TuiTreeItemContext>(POLYMORPHEUS_CONTEXT);

    protected readonly expanded$ = this.change$.pipe(
        startWith(null),
        map(() => this.isExpanded),
        distinctUntilChanged(),
    );

    public ngDoCheck(): void {
        this.change$.next();
    }

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
