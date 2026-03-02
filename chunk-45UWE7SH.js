import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/kit';

@Component({
    imports: [TuiCarousel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
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
`;export{t as default};
