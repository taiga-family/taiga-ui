import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-carousel-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCarouselExample2 {
    index = 0;

    readonly items = [
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
    ];
}
