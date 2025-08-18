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
export default class Example9 {
    protected readonly items = Array.from({length: 100}, (_, i) => i);
}
