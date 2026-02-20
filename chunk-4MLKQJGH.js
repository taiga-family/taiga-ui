import"./chunk-HU6DUUP4.js";var i=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [KeyValuePipe, TuiCopy],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly fonts = {
        'heading-h1': '--tui-typography-heading-h1',
        'heading-h2': '--tui-typography-heading-h2',
        'heading-h3': '--tui-typography-heading-h3',
        'heading-h4': '--tui-typography-heading-h4',
        'heading-h5': '--tui-typography-heading-h5',
        'heading-h6': '--tui-typography-heading-h6',
        'body-l': '--tui-typography-body-l',
        'body-m': '--tui-typography-body-m',
        'body-s': '--tui-typography-body-s',
        'body-xs': '--tui-typography-body-xs',
        'ui-l': '--tui-typography-ui-l',
        'ui-m': '--tui-typography-ui-m',
        'ui-s': '--tui-typography-ui-s',
        'ui-xs': '--tui-typography-ui-xs',
    } as const;

    protected orderBy(): number {
        return 0;
    }
}
`;export{i as default};
