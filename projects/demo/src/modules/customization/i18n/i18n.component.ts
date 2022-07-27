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
        import(`!!raw-loader!../../../../../i18n/README.md`) as Promise<{
            default: string;
        }>,
    ).pipe(map(readme => readme.default.split(`Supported languages:`)[1]));
}
