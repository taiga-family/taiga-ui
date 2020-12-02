import {DOCUMENT} from '@angular/common';
import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'bootstrap',
    styleUrls: ['./bootstrap.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class BootstrapComponent extends AbstractTuiThemeSwitcher {
    constructor(@Inject(DOCUMENT) documentRef: Document) {
        super(documentRef);
    }
}
