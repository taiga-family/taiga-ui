import {Component, forwardRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TuiAutofillFieldName,
    TuiContextWithImplicit,
    TuiInputMode,
    TuiInputType,
} from '@taiga-ui/cdk';
import {
    TuiDirection,
    TuiHintModeT,
    TuiHorizontalDirection,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
const CUSTOM_SVG_NAME = 'Bell';

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
    @ViewChild('interactiveContent')
    private readonly interactiveIcon: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeL>
    > = '';

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly themes = ['Taiga UI', 'Bootstrap', 'Material'];
    theme = this.themes[0];

    readonly iconVariants = ['', 'tuiIconSearchLarge', 'Interactive content'];
    selectedIcon = this.iconVariants[0];

    readonly iconLeftVariants = ['', 'tuiIconPiechartLarge', 'tuiIconCardsLarge'];
    iconLeft = '';

    readonly iconAlignVariants: readonly TuiHorizontalDirection[] = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    readonly typeVariants: readonly TuiInputType[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    type: TuiInputType = 'text';

    cleaner = false;

    editable = true;

    filler = '';

    prefix = '';

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

    autocomplete: TuiAutofillFieldName | '' = '';

    readonly inputModeVariants: readonly TuiInputMode[] = ['text', 'numeric'];

    inputMode = this.inputModeVariants[0];

    readonly customContentVariants = [CUSTOM_SVG_NAME, `<span>LongTextContent</span>`];

    customContentSelected = null;

    password = '';

    example2Value = 'mail@example.com';

    value = '';

    exampleText = '';

    disabled = false;

    readOnly = false;

    labelOutside = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size = this.sizeVariants[2];

    readonly hintContentVariants: readonly string[] = ['Ivan Ivanov'];

    readonly hintDirectionVariants: readonly TuiDirection[] = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'bottom-middle',
        'top-left',
        'top-right',
        'top-middle',
    ];

    readonly hintModeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    invalid = false;

    hintContent = null;

    hintDirection: TuiDirection = this.hintDirectionVariants[2];

    hintMode: TuiHintModeT | null = null;

    get customContent(): string | null {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }

    get iconContent(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        if (this.selectedIcon === '') {
            return '';
        }

        return this.interactiveIcon && this.selectedIcon !== 'tuiIconSearchLarge'
            ? this.interactiveIcon
            : 'tuiIconSearchLarge';
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

    onClick(): void {
        console.info('Interactive icon clicked');
    }
}
