import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiTablePagination} from '@taiga-ui/addon-table';
import {TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion, TuiDemo, TuiDocLanguageSwitcher, TuiLink, TuiTablePagination],
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

    protected example1 = {
        'language-switcher.html':
            import('../../../../../addon-doc/components/language-switcher/index.html'),
        'language-switcher.ts': import(
            '../../../../../addon-doc/components/language-switcher/index.ts?raw',
            {with: {loader: 'text'}}
        ),
        'language-switcher.less':
            import('../../../../../addon-doc/components/language-switcher/index.less'),
    };
}
`;export{i as default};
