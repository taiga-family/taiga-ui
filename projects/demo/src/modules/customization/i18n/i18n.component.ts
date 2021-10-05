import {default as readme} from '!!raw-loader!../../../../../i18n/README.md';
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'i18n',
    templateUrl: './i18n.template.html',
    styleUrls: ['./i18n.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class I18nComponent {
    readonly supported = readme
        .split('> A package with tools for Taiga UI library i18n')[1]
        .split(`It's a part of [**Taiga UI**]`)[0];
}
