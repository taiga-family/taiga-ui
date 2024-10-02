import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {TuiPickerService} from '../services/picker.service';

@Component({
    standalone: false,
    selector: 'tui-linear-picker',
    templateUrl: './linear-picker.template.html',
    styleUrls: ['./linear-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiLinearPickerComponent {
    protected readonly $ = inject(TuiPickerService)
        .pipe(takeUntilDestroyed())
        .subscribe(([x]) => {
            this.value = x;
            this.valueChange.emit(x);
        });

    @Input()
    public value = 0;

    @Output()
    public readonly valueChange = new EventEmitter<number>();

    public get left(): number {
        return this.value * 100;
    }
}
