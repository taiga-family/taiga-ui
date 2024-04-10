import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSegmentedComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSegmentedComponent, NgFor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly buttons = ['Track active index', 'To color tabs', 'Differently'];
    protected active = 0;
}
