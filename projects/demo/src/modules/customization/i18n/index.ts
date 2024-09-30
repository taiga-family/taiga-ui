import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiTablePagination} from '@taiga-ui/addon-table';
import {TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAccordion, TuiDemo, TuiDocLanguageSwitcher, TuiLink, TuiTablePagination],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected example = {
        base: import('./base.md?raw'),
        dynamic: import('./dynamic.md?raw'),
        esbuild: import('./esbuild.md?raw'),
        custom: import('./custom.md?raw'),
    };

    protected example1 = {
        'language-switcher.html': import(
            '../../../../../addon-doc/components/language-switcher/index.html?raw'
        ),
        'language-switcher.ts': import(
            '../../../../../addon-doc/components/language-switcher/index.ts?raw'
        ),
        'language-switcher.less': import(
            '../../../../../addon-doc/components/language-switcher/index.less?raw'
        ),
    };
}
