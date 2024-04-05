import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiThumbnailCardComponent, NgFor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly sizes = ['s', 'm', 'l'] as const;
}
