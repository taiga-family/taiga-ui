import"./chunk-HU6DUUP4.js";var i=`import {Component, linkedSignal, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiButtonGroup, TuiPager} from '@taiga-ui/kit';
import {TuiCardMedium, TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiBadge,
        TuiButtonGroup,
        TuiCardMedium,
        TuiCarousel,
        TuiElasticContainer,
        TuiIcon,
        TuiPager,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly index = signal(1);
    protected readonly opacity = signal(1);
    protected readonly effective = linkedSignal(this.index);
    protected readonly items = [
        {
            title: 'RUB Account',
            content: '10 000 \u20BD',
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
            content: '30 000 \u20AC',
            gradient: 'linear-gradient(135deg, #1AC07E, #DEA683)',
            color: 'rgb(158 178 129)',
        },
    ];

    protected onScroll({scrollLeft, clientWidth}: HTMLElement): void {
        const scrolled = ((Math.abs(scrollLeft) - clientWidth) / clientWidth) % 1;
        const progress = this.index() || !scrolled ? scrolled : 1 + scrolled;

        if (progress) {
            this.opacity.set(4 * Math.abs(Math.abs(progress) - 0.5));
            this.effective.set(this.index() + Math.round(progress));
        }
    }
}
`;export{i as default};
