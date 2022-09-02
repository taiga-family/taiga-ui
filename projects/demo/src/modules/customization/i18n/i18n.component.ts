import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `i18n`,
    templateUrl: `./i18n.template.html`,
    styleUrls: [`./i18n.style.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class I18nComponent {
    readonly readme = from(
        import(`../../../../../i18n/README.md?raw`) as Promise<{
            default: string;
        }>,
    ).pipe(map(readme => readme.default.split(`Supported languages:`)[1]));

    exampleModule = import(`./app.module.md?raw`);

    example1: TuiDocExample = {
        'language-switcher.component.html': import(
            `../../../../../addon-doc/src/components/language-switcher/language-switcher.component.html?raw`
        ),
        'language-switcher.component.ts': import(
            `../../../../../addon-doc/src/components/language-switcher/language-switcher.component.ts?raw`
        ),
        'language-switcher.module.ts': import(
            `../../../../../addon-doc/src/components/language-switcher/language-switcher.module.ts?raw`
        ),
        'language-switcher.module.less': import(
            `../../../../../addon-doc/src/components/language-switcher/language-switcher.component.less?raw`
        ),
    };
}
