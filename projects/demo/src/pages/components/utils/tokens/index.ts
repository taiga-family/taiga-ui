import {Component} from '@angular/core';
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
export default class Page {
    protected readonly examples = [
        'TUI_BREAKPOINT',
        'WA_IS_ANDROID',
        'WA_IS_IOS',
        'WA_IS_MOBILE',
        'TUI_NUMBER_FORMAT',
        'TUI_DATE_FORMAT',
    ];
}
