import {NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiScrollbar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgFor, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example10 {
    protected readonly rows = Array.from({length: 50}, (_, i) => `Row ${i + 1}`);
    protected readonly cols = Array.from({length: 20}, (_, i) => `Col ${i + 1}`);
}
