import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiDropdown, TuiHint, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiInputPhoneModule,
        ReactiveFormsModule,
        TuiDropdown,
        TuiHint,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected countryCodes = ['+7', '+850', '+1', '+52'];

    protected countryCode = this.countryCodes[0];

    protected phoneMasksAfterCountryCode = [
        '(###) ###-##-##',
        '(####)+____:-#############',
        '### ###-####',
    ];

    protected phoneMaskAfterCountryCode = this.phoneMasksAfterCountryCode[0];

    public override cleaner = false;

    public control = new FormControl('', [Validators.required, Validators.minLength(12)]);
}
