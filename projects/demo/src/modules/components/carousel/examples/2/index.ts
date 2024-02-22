import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-carousel-example-2',
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
