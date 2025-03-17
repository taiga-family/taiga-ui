import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
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
