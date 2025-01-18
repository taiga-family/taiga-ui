import {NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    inject,
    Input,
    signal,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Component({
    standalone: true,
    selector: 'tui-expand',
    imports: [NgIf, NgTemplateOutlet],
    template: `
        <div class="t-wrapper">
            <ng-container
                *ngIf="signal() || animating()"
                [ngTemplateOutlet]="content || null"
            />
            <ng-content />
        </div>
    `,
    styleUrls: ['./expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._expanded]': 'signal()',
        '(transitionend.self)': 'onTransitionEnd($event)',
    },
})
export class TuiExpand {
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);

    @ContentChild(TuiItem, {read: TemplateRef})
    protected content?: TemplateRef<any>;

    protected readonly signal = signal(false);
    protected readonly animating = signal(false);

    @Input()
    public set expanded(expanded: boolean) {
        if (expanded === this.signal()) {
            return;
        }

        this.signal.set(expanded);
        // TODO: try removing in Angular 17
        this.cdr.detectChanges();
        this.el.classList.toggle('_expanded', expanded);
    }

    protected onTransitionEnd({propertyName}: TransitionEvent): void {
        if (propertyName === 'grid-template-rows') {
            this.animating.set(this.signal());
        }
    }
}
