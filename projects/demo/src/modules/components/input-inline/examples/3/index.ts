import type {OnInit} from '@angular/core';
import {ChangeDetectorRef, Component, DestroyRef, inject, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiInputInlineComponent} from '@taiga-ui/kit';
import {timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiInputInlineComponent, TuiButtonDirective, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent implements OnInit {
    private readonly cd = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
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
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(value => {
                this.count = String(value);
            });
    }
}
