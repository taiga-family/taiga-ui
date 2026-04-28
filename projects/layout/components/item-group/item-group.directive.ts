import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

const OPTIONS = {behavior: 'smooth', block: 'nearest', inline: 'center'} as const;

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './item-group.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-item-group-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiItemGroup]',
    host: {
        'data-tui-version': TUI_VERSION,
        '[class._horizontal]': 'horizontal()',
        '(click)': 'onClick($event.target)',
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
