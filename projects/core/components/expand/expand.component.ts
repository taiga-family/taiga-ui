import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    input,
    type OnInit,
    signal,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';

@Component({
    selector: 'tui-expand',
    imports: [NgTemplateOutlet],
    template: `
        <div class="t-wrapper">
            @if (expanded() || open()) {
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
