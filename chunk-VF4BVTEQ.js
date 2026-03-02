import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    imports: [TuiBlockStatus, TuiButton, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected card = false;

    protected readonly sizes: TuiSizeL[] = ['l', 'm'];

    protected size: TuiSizeL = this.sizes[0] || 'l';

    protected readonly examples = [
        'Basic',
        'With actions',
        'Cards',
        'Customization',
        'Mobile',
        'Desktop medium',
        'Empty image block',
        'Empty description block',
    ];
}
`;export{o as default};
