import"./chunk-LQ6M4NCU.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiDemo, TuiLink, TuiList],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly component = import('./examples/import/import.md');
}
`;export{t as default};
