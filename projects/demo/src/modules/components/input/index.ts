import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTextCodeDirective} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import {
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiHint,
    TuiLink,
    TuiNotificationComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

const LONG_TEXT_TEMPLATE = '<span>LongTextContent</span>';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLink,
        RouterLink,
        TuiNotificationComponent,
        TuiInputModule,
        ReactiveFormsModule,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiHint,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        TuiAmountPipe,
        InheritedDocumentationComponent,
        TuiTextCodeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    @ViewChild('justLongText', {static: true})
    private readonly longTextRef!: TemplateRef<HTMLElement>;

    protected readonly routes = DemoRoute;
    protected placeholder = 'Field placeholder';

    public readonly iconVariants = ['', 'tuiIconSearch', 'tuiIconCalendar'];

    public icon = this.iconVariants[0];

    public override iconLeft = this.iconVariants[0];

    public readonly control = new FormControl('111', Validators.required);

    public override readonly customContentVariants = [
        '',
        'tuiIconSearch',
        'tuiIconCalendar',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
        LONG_TEXT_TEMPLATE,
    ];

    public override get customContent(): PolymorpheusContent {
        return this.customContentSelected === LONG_TEXT_TEMPLATE
            ? this.longTextRef
            : this.customContentSelected;
    }

    public override set customContent(newValue) {
        this.customContentSelected = newValue;
    }
}
