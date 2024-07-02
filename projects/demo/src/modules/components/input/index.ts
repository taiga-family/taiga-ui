import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiDropdown, TuiHint, TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

const LONG_TEXT_TEMPLATE = '<span>LongTextContent</span>';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputModule,
        ReactiveFormsModule,
        TuiDropdown,
        TuiHint,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiAmountPipe,
        InheritedDocumentation,
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

    public readonly iconVariants = ['', '@tui.search', '@tui.calendar'];

    public icon = this.iconVariants[0];

    public override iconStart = this.iconVariants[0];

    public readonly control = new FormControl('111', Validators.required);

    public override readonly customContentVariants = [
        '',
        '@tui.search',
        '@tui.calendar',
        '@tui.visa-mono',
        '@tui.mastercard-mono',
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
