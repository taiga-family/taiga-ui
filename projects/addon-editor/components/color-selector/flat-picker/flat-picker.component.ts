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
import type {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: `tui-flat-picker`,
    templateUrl: `./flat-picker.template.html`,
    styleUrls: [`./flat-picker.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiFlatPickerComponent {
    @Input()
    @tuiDefaultProp()
    value: TuiPoint = [0, 0];

    @Output()
    readonly valueChange = new EventEmitter<[number, number]>();

    constructor(@Inject(TuiPickerService) point$: TuiPickerService) {
        point$.subscribe(point => {
            this.value = point;
            this.valueChange.emit([point[0], point[1]]);
        });
    }

    get left(): number {
        return this.value[0] * 100;
    }

    get top(): number {
        return this.value[1] * 100;
    }
}
