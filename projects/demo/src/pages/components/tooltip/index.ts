import {Component} from '@angular/core';
import {TuiDocHint} from '@demo/components/hint';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, type TuiSizeS} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiDocHint, TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Custom host',
        'Repeating template',
        'Options',
        'Visibility',
    ];

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected size: TuiSizeS = 'm';
    protected content = 'Tooltip text';
}
