import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiElasticContainer, TuiSlides} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiButton,
        TuiElasticContainer,
        TuiGroup,
        TuiSlides,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['First slide ', 'Second slide ', 'Third slide '];

    protected index = 0;
}
