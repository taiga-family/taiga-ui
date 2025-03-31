import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {take, timer} from 'rxjs';
import {tuiInjectElement} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./item-group.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-item-group',
    },
})
class TuiItemGroupStyles {}

@Directive({
    standalone: true,
    selector: '[tuiItemGroup]',
    host: {
        '(click)': 'onClick($event.target)',
        '[class._horizontal]': 'horizontal',
    },
})
export class TuiItemGroup implements AfterViewInit {
    private readonly el = tuiInjectElement();
    protected readonly nothing = tuiWithStyles(TuiItemGroupStyles);

    @Input()
    public horizontal = false;

    @Input()
    public autoscroll = false;

    public ngAfterViewInit(): void {
        this.el.classList.add('_initialized');
    }

    protected onClick(target: HTMLElement): void {
        if (this.autoscroll && this.horizontal) {
            timer(0) // Safari bug
                .pipe(take(1))
                .subscribe(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                    });
                });
        }
    }
}
