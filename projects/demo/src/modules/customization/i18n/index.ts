import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiDocLanguageSwitcher, TuiLink],
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
        'language-switcher.component.html': import(
            '../../../../../addon-doc/components/language-switcher/index.html?raw'
        ),
        'language-switcher.component.ts': import(
            '../../../../../addon-doc/components/language-switcher/index.ts?raw'
        ),
        'language-switcher.module.less': import(
            '../../../../../addon-doc/components/language-switcher/index.less?raw'
        ),
    };
}
