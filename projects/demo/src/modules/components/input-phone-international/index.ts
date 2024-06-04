import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiHint, TuiTextfieldOptionsDirective} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TUI_ALL_COUNTRIES_ISO_CODES,
    TuiInputPhoneInternationalComponent,
} from '@taiga-ui/kit';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        InheritedDocumentationComponent,
        TuiDemo,
        TuiDropdownModule,
        TuiHint,
        TuiInputPhoneInternationalComponent,
        TuiTextfieldOptionsDirective,
        ReactiveFormsModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
        ['RU', 'KZ', 'UA', 'BY'],
        TUI_ALL_COUNTRIES_ISO_CODES,
    ];

    protected countries = this.countriesVariants[0];

    protected readonly countryIsoCodeVariants: readonly TuiCountryIsoCode[] = [
        'RU',
        'KZ',
        'UA',
        'BY',
    ];

    protected countryIsoCode = this.countryIsoCodeVariants[0];

    public override cleaner = false;
    public control = new FormControl('', [Validators.required, Validators.minLength(9)]);
}
