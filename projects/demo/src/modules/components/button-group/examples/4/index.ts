import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {
    TuiBadge,
    TuiButtonGroup,
    TuiCarousel,
    TuiElasticContainer,
    TuiPagination,
} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiBadge,
        TuiButtonGroup,
        TuiCardMedium,
        TuiCarousel,
        TuiElasticContainer,
        TuiIcon,
        TuiPagination,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;
    protected opacity = 100;

    protected readonly items = [
        {
            title: 'RUB Account',
            content: '10 000 ₽',
            gradient: 'linear-gradient(334.83deg, #7d8ca0 0%, #647382 100%)',
            color: '#7d8ca0',
        },
        {
            title: 'USD Account',
            content: '2 000 000 $',
            gradient: 'linear-gradient(-90deg, #cf77f3 0%, #009bff 47%, #2ac9db 100%)',
            color: 'rgb(0, 155, 255)',
        },
        {
            title: 'EUR Account',
            content: '30 000 €',
            gradient: 'linear-gradient(135deg, #1AC07E, #DEA683)',
            color: 'rgb(158 178 129)',
        },
    ];

    protected onShift(percent: number): void {
        const x2 = Math.floor(percent * 2);
        const opacity = percent < 0 ? 100 + x2 : 100 - x2;

        this.opacity = opacity < 20 ? 0 : opacity;
    }
}
