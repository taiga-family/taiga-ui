import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

const OPTIONS = {behavior: 'smooth', block: 'nearest', inline: 'center'} as const;

@Component({
    template: '',
    styleUrl: './item-group.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-item-group'},
})
class Styles {}

@Directive({
    selector: '[tuiItemGroup]',
    host: {
        '(click)': 'onClick($event.target)',
        '[class._horizontal]': 'horizontal()',
    },
})
export class TuiItemGroup implements AfterViewInit {
    private readonly el = tuiInjectElement();

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly horizontal = input(false);
    public readonly autoscroll = input(false);

    public ngAfterViewInit(): void {
        this.el.classList.add('_initialized');
    }

    protected onClick(target: HTMLElement): void {
        if (this.autoscroll() && this.horizontal()) {
            // Safari bug
            setTimeout(() => target.scrollIntoView(OPTIONS));
        }
    }
}
