import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiLineClamp],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected linesLimit = 1;
    protected lineHeight = 24;
    protected maxWidth = 100;
    protected content = '';

    protected readonly examples = [
        'Styles change',
        'Expanding',
        'Resize parent container',
        'Clamp inside dropdown',
        'Custom content workaround',
        'Virtual content',
        'Custom font-size and line-height',
    ];
}
