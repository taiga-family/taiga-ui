import"./chunk-LQ6M4NCU.js";var r=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFormatNumberPipe} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    selector: 'related',
    imports: [
        TuiButton,
        TuiCardLarge,
        TuiDemo,
        TuiFormatNumberPipe,
        TuiHeader,
        TuiList,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly licenses = [
        {
            id: 'figma',
            name: 'Taiga Figma',
            category: 'Design',
            price: 250,
            unit: '/ developer / year',
            description: 'Bring design and development onto the same page.',
            features: [
                'Taiga UI design library for Figma',
                'A shared vocabulary for designers and developers',
                'Build your next interface with a familiar foundation',
            ],
            symbol: '\u25C8',
        },
        {
            id: 'premium',
            name: 'Taiga Premium',
            category: 'Bundle',
            price: 1000,
            unit: '/ year',
            description: 'Your identity. Our components. A closer collaboration.',
            features: [
                '5 Figma licenses included',
                'Help customizing to fit your company appearance',
                'Direct communication with our engineers',
            ],
            symbol: '\u2733',
        },
    ];
}
`;export{r as default};
