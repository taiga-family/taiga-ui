import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_DARK_MODE} from '@taiga-ui/core';

import {BACKGROUNDS, CHARTS, OTHERS, STATUSES, TEXT} from './constants';
import {TableColors} from './examples/table';

@Component({
    imports: [TableColors, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly darkMode = inject(TUI_DARK_MODE);

    protected readonly basicImportsLess =
        import('./examples/import/basic-imports-less.md');

    protected readonly backgrounds = BACKGROUNDS;
    protected readonly text = TEXT;
    protected readonly statuses = STATUSES;
    protected readonly others = OTHERS;
    protected readonly charts = CHARTS;
}
`;export{t as default};
