import {NgFor} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, TuiButton, TuiCarousel, TuiPagination],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 2;
    protected readonly items = inject(ITEMS);
}
