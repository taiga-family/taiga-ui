import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarouselModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-carousel-example-2',
    imports: [TuiCarouselModule, NgFor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCarouselExample2 {
    protected index = 0;

    protected readonly items = [
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
    ];
}
