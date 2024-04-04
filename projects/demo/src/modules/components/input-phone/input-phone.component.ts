import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-phone',
    templateUrl: './input-phone.template.html',
    styleUrls: ['./input-phone.style.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputPhoneComponent)],
})
export class ExampleTuiInputPhoneComponent extends AbstractExampleTuiControl {
    public override cleaner = false;

    public control = new FormControl('', [Validators.required, Validators.minLength(12)]);

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected countryCodes = ['+7', '+850', '+1', '+52'];

    protected countryCode = this.countryCodes[0];

    protected phoneMasksAfterCountryCode = [
        '(###) ###-##-##',
        '(####)+____:-#############',
        '### ###-####',
    ];

    protected phoneMaskAfterCountryCode = this.phoneMasksAfterCountryCode[0];
}
