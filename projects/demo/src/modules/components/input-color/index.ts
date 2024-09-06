import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiColorPickerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiColorPickerModule, TuiDemo],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {}
