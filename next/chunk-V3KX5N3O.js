import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    imports: [TuiCompass, TuiDemo, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected colorVariants = [
        '#428bf9',
        'rgb(234, 56, 24)',
        'var(--tui-status-positive)',
        '',
    ];

    protected color = this.colorVariants[0]!;
    protected degrees = 90;

    public readonly examples = ['Basic', 'Direction'];
}
`;export{o as default};
