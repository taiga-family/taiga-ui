import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiGroup} from '@taiga-ui/core';
import {TuiBlock} from '@taiga-ui/kit';

import {BACKGROUNDS, CHARTS, OTHERS, STATUSES, TEXT} from './constants';
import {TableColors} from './examples/table/table.component';

@Component({
    standalone: true,
    imports: [TuiDemo, TableColors, TuiBlock, FormsModule, TuiGroup, TuiPlatform],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly basicImportsLess = import(
        './examples/import/basic-imports-less.md?raw'
    );

    protected readonly backgrounds = BACKGROUNDS;
    protected readonly text = TEXT;
    protected readonly statuses = STATUSES;
    protected readonly others = OTHERS;
    protected readonly charts = CHARTS;

    protected platform: 'android' | 'web' = 'web';
}
