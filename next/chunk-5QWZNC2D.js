import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
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
}
`;export{o as default};
