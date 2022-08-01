import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
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
        import(`!!raw-loader!../../../../../i18n/README.md`) as Promise<{
            default: string;
        }>,
    ).pipe(map(readme => readme.default.split(`Supported languages:`)[1]));

    exampleModule = import(`!!raw-loader!./app.module.md`);

    example1: TuiDocExample = {
        'language-switcher.component.html': import(
            `!!raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.html`
        ),
        'language-switcher.component.ts': import(
            `!!raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.ts`
        ),
        'language-switcher.module.ts': import(
            `!!raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.module.ts`
        ),
        'language-switcher.module.less': import(
            `!!raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.less`
        ),
    };
}
