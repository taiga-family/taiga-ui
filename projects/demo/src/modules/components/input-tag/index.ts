import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER, tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiHintOptionsDirective,
    TuiLinkDirective,
} from '@taiga-ui/core';
import type {TuiStringifiableItem} from '@taiga-ui/legacy';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputTagModule,
        ReactiveFormsModule,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        TuiLinkDirective,
        RouterLink,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
        ]),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly routes = DemoRoute;

    protected editable = true;

    protected uniqueTags = true;

    protected readonly separatorVariants = [',', ';', /[\d]/, /[\s,]/];

    protected separator = this.separatorVariants[0];

    protected readonly iconVariants: readonly string[] = ['tuiIconSearch'];

    protected icon = '';

    protected search = '';

    protected rows = 100;

    protected tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<string>> = [
        TUI_TRUE_HANDLER,
        item => item === 'test',
        item => item !== 'mail',
    ];

    protected tagValidator = this.tagValidatorVariants[0];

    protected inputHidden = false;

    protected readonly disabledItemHandlerVariants: Array<
        TuiBooleanHandler<TuiStringifiableItem<string> | string>
    > = [TUI_FALSE_HANDLER, item => String(item).startsWith('T')];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    public override readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    public override size: TuiSizeL | TuiSizeS =
        this.sizeVariants[this.sizeVariants.length - 1];

    public readonly control = new FormControl(
        ['John Cleese', 'Eric Idle', 'Michael Palin'],
        Validators.required,
    );

    public override maxLengthVariants: number[] = [10, 20];

    public override maxLength: number | null = null;
}
