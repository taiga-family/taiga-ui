import type {OnInit} from '@angular/core';
import {ChangeDetectorRef, Component, DestroyRef, inject, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';
import {timer} from 'rxjs';

@Component({
    selector: 'tui-input-inline-example-3',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputInlineExample3 implements OnInit {
    private readonly cd = inject(ChangeDetectorRef);
    private readonly destroy$ = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected count = '0';

    public ngOnInit(): void {
        if (this.isE2E) {
            return;
        }

        timer(0, 3000)
            .pipe(
                tuiZoneOptimized(this.zone),
                tuiWatch(this.cd),
                takeUntilDestroyed(this.destroy$),
            )
            .subscribe(value => {
                this.count = String(value);
            });
    }
}
