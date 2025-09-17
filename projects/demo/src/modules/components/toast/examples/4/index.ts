import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform, type TuiPopover, TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButton} from '@taiga-ui/core';
import {TuiProgressCircle, TuiToast, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {interval, scan, takeWhile} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiPlatform, TuiProgressCircle, TuiSwipe, TuiToast],
    template: `
        <div tuiPlatform="ios">
            <button
                tuiToast
                type="button"
                (click)="show()"
                (tuiSwipe)="onSwipe($event)"
            >
                <tui-progress-circle
                    [max]="max"
                    [style.--t-diameter.rem]="1.5"
                    [style.--tui-thickness.rem]="0.2"
                    [value]="(value$ | async) || 0"
                />

                Notification
            </button>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
    private readonly toast = inject(TuiToastService);

    protected readonly max = 5000;
    protected readonly value$ = interval(100).pipe(
        scan((acc) => acc + 100, 0),
        takeWhile((value) => value <= this.max),
    );

    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();

    public show(): void {
        this.toast.hideAll().show(new PolymorpheusComponent(Toast));
    }

    public onSwipe(event: TuiSwipeEvent): void {
        if (event.direction === 'top') {
            this.context.$implicit.complete();
        }
    }
}

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly toast = inject(TuiToastService);

    public show(): void {
        this.toast.show(new PolymorpheusComponent(Toast));
    }
}
