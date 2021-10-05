import {DOCUMENT} from '@angular/common';
import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'elderly',
    styleUrls: ['./elderly.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ElderlyComponent extends AbstractTuiThemeSwitcher {
    constructor(@Inject(DOCUMENT) documentRef: any) {
        super(documentRef as Document);
    }
}
