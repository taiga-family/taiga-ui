import"./chunk-HU6DUUP4.js";var n=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {w: 1, h: 1, content: 'Item 1'},
        {w: 1, h: 1, content: 'Item 2'},
        {w: 2, h: 1, content: 'Item 3'},
        {w: 1, h: 1, content: 'Item 4'},
        {w: 3, h: 1, content: 'Item 5'},
        {w: 1, h: 1, content: 'Item 6'},
        {w: 2, h: 2, content: 'rick'},
        {w: 1, h: 1, content: 'Item 8'},
        {w: 1, h: 1, content: 'Item 9'},
    ];

    protected order = new Map();
}
`;export{n as default};
