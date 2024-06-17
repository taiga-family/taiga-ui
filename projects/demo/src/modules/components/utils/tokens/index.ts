import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_DOC_CODE_EDITOR} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
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
