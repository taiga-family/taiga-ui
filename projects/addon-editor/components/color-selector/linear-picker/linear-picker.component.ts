import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiPickerService} from '@taiga-ui/addon-editor/services';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: `tui-linear-picker`,
    templateUrl: `./linear-picker.template.html`,
    styleUrls: [`./linear-picker.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiLinearPickerComponent {
    @Input()
    @tuiDefaultProp()
    value = 0;

    @Output()
    readonly valueChange = new EventEmitter<number>();

    constructor(@Inject(TuiPickerService) point$: TuiPickerService) {
        point$.subscribe(([x]) => {
            this.value = x;
            this.valueChange.emit(x);
        });
    }

    get left(): number {
        return this.value * 100;
    }
}
