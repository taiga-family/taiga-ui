import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Less} from '!!raw-loader!./examples/1/style.less';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef, ViewChild} from '@angular/core';
import {TuiAutofillFieldName, TuiInputModeT, TuiInputTypeT} from '@taiga-ui/cdk';
import {
    TuiDirection,
    TuiHintModeT,
    TuiHorizontalDirection,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {PolymorpheusContent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;

@Component({
    selector: 'example-tui-primitive-textfield',
    templateUrl: './primitive-textfield.template.html',
    styleUrls: ['./primitive-textfield.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiPrimitiveTextfieldComponent),
        },
    ],
})
export class ExampleTuiPrimitiveTextfieldComponent extends AbstractExampleTuiInteractive {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly themes = ['Taiga UI', 'Bootstrap', 'Material'];
    theme = this.themes[0];

    readonly iconVariants: string[] = ['tuiIconSearch', 'Interactive content'];

    selectedIcon: 'tuiIconSearch' | 'Interactive content' | null = null;

    readonly iconAlignVariants: ReadonlyArray<TuiHorizontalDirection> = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    readonly typeVariants: readonly TuiInputTypeT[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    type = 'text';

    cleaner = false;

    editable = true;

    filler = '';

    postfix = '';

    readonly maxLengthVariants: readonly number[] = [10];

    maxLength = null;

    autocompleteVariants = [
        'off',
        'cc-name',
        'cc-number',
        'cc-exp-month',
        'cc-exp-year',
        'cc-type',
        'given-name',
        'additional-name',
        'family-name',
        'username',
        'email',
        'street-address',
        'postal-code',
        'country-name',
    ];

    autocomplete: TuiAutofillFieldName | null = null;

    readonly inputModeVariants: readonly TuiInputModeT[] = ['text', 'numeric'];

    inputMode = this.inputModeVariants[0];

    readonly customContentVariants = ['Bell'];

    customContentSelected = null;

    password = '';

    value = '';

    exampleText = '';

    disabled = false;

    readOnly = false;

    labelOutside = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size = this.sizeVariants[2];

    readonly hintContentVariants: readonly string[] = ['Ivan Ivanov'];

    readonly hintDirectionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    readonly hintModeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    invalid = false;

    hintContent = null;

    hintDirection: TuiDirection = this.hintDirectionVariants[2];

    hintMode: TuiHintModeT | null = null;

    @ViewChild('interactiveContent')
    private readonly interactiveIcon?: PolymorpheusTemplate<{}>;

    get customContent(): string | null {
        return this.customContentSelected !== null ? CUSTOM_SVG : null;
    }

    get iconContent(): PolymorpheusContent | null {
        if (this.selectedIcon === null) {
            return null;
        }

        return this.interactiveIcon && this.selectedIcon !== 'tuiIconSearch'
            ? this.interactiveIcon
            : 'tuiIconSearch';
    }

    get isBootstrap(): boolean {
        return this.theme === this.themes[1];
    }

    get isMaterial(): boolean {
        return this.theme === this.themes[2];
    }

    get placeholder(): string {
        return this.isBootstrap ? 'Type a value' : 'Theming sample';
    }

    get customizationSize(): TuiSizeS | TuiSizeL {
        return this.isBootstrap ? 's' : 'l';
    }

    onClick() {
        console.log('Interactive icon clicked');
    }
}
