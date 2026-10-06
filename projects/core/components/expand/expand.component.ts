import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    input,
    type OnInit,
    signal,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-expand',
    imports: [NgTemplateOutlet],
    template: `
        <div class="t-wrapper">
            @if (expanded() || (open() && animated)) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
    styleUrl: './expand.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expanded]': 'expanded()',
        '[class._open]': 'open()',
        '(transitionend.self)': 'onTransitionEnd($event)',
    },
})
export class TuiExpand implements OnInit {
    protected readonly animated = !!inject(TUI_ANIMATIONS_SPEED);
    protected readonly content = contentChild(TuiItem, {read: TemplateRef});
    protected readonly open = signal(false);

    public readonly expanded = input(false);

    public ngOnInit(): void {
        this.open.set(this.expanded());
    }

    protected onTransitionEnd({propertyName}: TransitionEvent): void {
        if (propertyName === 'grid-template-rows') {
            this.open.set(this.expanded());
        }
    }
}
