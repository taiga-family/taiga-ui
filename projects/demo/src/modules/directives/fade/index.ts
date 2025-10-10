import {Component} from '@angular/core';
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
    protected readonly examples = ['Basic', 'Multiline', 'Vertical', 'Hyphens'];

    protected lineHeight = '100%';
    protected size = '1.5em';
    protected offset = '0em';
}
