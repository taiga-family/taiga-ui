import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {take, timer} from 'rxjs';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./chip-group.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-chip-group',
    },
})
class TuiChipGroupStyles {}

@Directive({
    standalone: true,
    selector: 'tui-chip-group, [tuiChipGroup]',
    host: {
        '(click)': 'onClick($event.target)',
        '[class._horizontal]': 'horizontal',
        '[class._initialized]': 'initialized()',
    },
})
export class TuiChipGroup implements AfterViewInit {
    protected readonly nothing = tuiWithStyles(TuiChipGroupStyles);
    protected readonly initialized = signal(false);

    @Input()
    public horizontal = false;

    @Input()
    public autoscroll = false;

    public ngAfterViewInit(): void {
        this.initialized.set(true);
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
