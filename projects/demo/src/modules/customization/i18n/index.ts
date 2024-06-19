import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';
import {from, map} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink, TuiLanguageSwitcher],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly readme = from(
        import('../../../../../i18n/README.md?raw') as Promise<{
            default: string;
        }>,
    ).pipe(map(readme => readme.default.split('Supported languages:')[1]));

    protected exampleModule = import('./app.module.md?raw');
    protected exampleEsbuildModule = import('./app.esbuild.module.md?raw');

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
