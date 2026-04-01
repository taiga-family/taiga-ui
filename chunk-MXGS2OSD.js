import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiFade],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Multiline',
        'Vertical',
        'Hyphens',
        'InputChip',
    ];

    protected lineHeight = '100%';
    protected size = '1.5em';
    protected offset = '0em';
}
`;export{o as default};
