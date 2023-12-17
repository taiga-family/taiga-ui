import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {from, map} from 'rxjs';

@Component({
    selector: 'i18n',
    templateUrl: './i18n.template.html',
    changeDetection,
})
export class I18nComponent {
    readonly readme = from(
        import('../../../../../i18n/README.md?raw') as Promise<{
            default: string;
        }>,
    ).pipe(map(readme => readme.default.split('Supported languages:')[1]));

    exampleModule = import('./app.module.md?raw');
    exampleEsbuildModule = import('./app.esbuild.module.md?raw');

    example1: TuiDocExample = {
        'language-switcher.component.html': import(
            '../../../../../addon-doc/components/language-switcher/language-switcher.component.html?raw'
        ),
        'language-switcher.component.ts': import(
            '../../../../../addon-doc/components/language-switcher/language-switcher.component.ts?raw'
        ),
        'language-switcher.module.ts': import(
            '../../../../../addon-doc/components/language-switcher/language-switcher.module.ts?raw'
        ),
        'language-switcher.module.less': import(
            '../../../../../addon-doc/components/language-switcher/language-switcher.component.less?raw'
        ),
    };
}
