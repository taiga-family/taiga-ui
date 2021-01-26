import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'i18n',
    templateUrl: './i18n.template.html',
    styleUrls: ['./i18n.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class I18nComponent {}
