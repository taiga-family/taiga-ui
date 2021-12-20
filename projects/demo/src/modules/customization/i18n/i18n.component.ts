import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as readme} from '!!raw-loader!../../../../../i18n/README.md';

@Component({
    selector: 'i18n',
    templateUrl: './i18n.template.html',
    styleUrls: ['./i18n.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class I18nComponent {
    readonly readme = readme.split('Supported languages:')[1];
}
