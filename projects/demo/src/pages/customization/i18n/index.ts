import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTablePagination} from '@taiga-ui/addon-table';
import {TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

import {TuiI18nExample1} from './examples/1';

@Component({
    imports: [TuiAccordion, TuiDemo, TuiI18nExample1, TuiLink, TuiTablePagination],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected example = {
        base: import('./base.md'),
        dynamic: import('./dynamic.md'),
        esbuild: import('./esbuild.md'),
        custom: import('./custom.md'),
    };

    protected readonly example1 = {
        TypeScript: import('./examples/1?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/1/index.html'),
        LESS: import('./examples/1/index.less'),
    };
}
