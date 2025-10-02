import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    input,
    signal,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';

@Component({
    selector: 'tui-expand',
    imports: [NgTemplateOutlet],
    template: `
        <div class="t-wrapper">
            @if (expanded() || animating()) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
    styleUrls: ['./expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expanded]': 'expanded()',
        '(transitionend.self)': 'onTransitionEnd($event)',
    },
})
export class TuiExpand {
    protected readonly content = contentChild(TuiItem, {read: TemplateRef});
    protected readonly animating = signal(false);

    public readonly expanded = input(false);

    protected onTransitionEnd({propertyName}: TransitionEvent): void {
        if (propertyName === 'grid-template-rows') {
            this.animating.set(this.expanded());
        }
    }
}
