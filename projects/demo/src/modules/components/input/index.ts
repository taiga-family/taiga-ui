import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTextCodeDirective} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import {
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';

const LONG_TEXT_TEMPLATE = '<span>LongTextContent</span>';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
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
        InheritedDocumentationModule,
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

    public readonly iconVariants = ['', 'tuiIconSearchLarge', 'tuiIconCalendarLarge'];

    public override iconLeft = this.iconVariants[0];

    public readonly control = new FormControl('111', Validators.required);

    public override readonly customContentVariants = [
        '',
        'tuiIconSearchLarge',
        'tuiIconCalendarLarge',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
        LONG_TEXT_TEMPLATE,
    ];

    protected icon = this.iconVariants[0];

    protected placeholder = 'Field placeholder';

    public override get customContent(): PolymorpheusContent {
        return this.customContentSelected === LONG_TEXT_TEMPLATE
            ? this.longTextRef
            : this.customContentSelected;
    }

    public override set customContent(newValue) {
        this.customContentSelected = newValue;
    }
}
