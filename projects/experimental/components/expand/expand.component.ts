import {NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Input,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives';

@Component({
    standalone: true,
    selector: 'tui-expand',
    imports: [NgIf, NgTemplateOutlet],
    template: `
        <div class="t-wrapper">
            <ng-container
                *ngIf="expanded || animating"
                [ngTemplateOutlet]="content || null"
            />
            <ng-content />
        </div>
    `,
    styleUrls: ['./expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expanded]': 'expanded',
        '(transitionend.self)': 'onTransitionEnd($event)',
    },
})
export class TuiExpand {
    @ContentChild(TuiItem, {read: TemplateRef})
    protected content?: TemplateRef<any>;

    protected animating = false;

    @Input()
    public expanded = false;

    protected onTransitionEnd({propertyName}: TransitionEvent): void {
        if (propertyName === 'grid-template-rows') {
            this.animating = this.expanded;
        }
    }
}
