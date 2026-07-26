import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiCardLarge, TuiCarousel, TuiHeader],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly texts = [
        'Lorem ipsum dolor sit amet',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        'Contrary to popular belief, Lorem Ipsum is not simply random text',
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable",
    ];
}
