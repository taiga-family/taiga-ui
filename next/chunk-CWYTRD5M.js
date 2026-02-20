import"./chunk-HU6DUUP4.js";var i=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiHeader, TuiPopout, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
}
`;export{i as default};
