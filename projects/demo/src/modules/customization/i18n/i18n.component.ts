import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
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
}
