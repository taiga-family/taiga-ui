import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_DOC_CODE_EDITOR} from '@taiga-ui/addon-doc';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_DOC_CODE_EDITOR,
            useValue: null,
        },
    ],
})
export default class Page {}
`;export{t as default};
