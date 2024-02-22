import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCodeCVCLength, tuiCreateLuhnValidator} from '@taiga-ui/addon-commerce';
import {
    TuiDocDocumentationPropertyConnectorDirective,
    TuiDocExample,
} from '@taiga-ui/addon-doc';
import {TuiHintOptions} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-input-card',
    templateUrl: './input-card.template.html',
    styleUrls: ['./input-card.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCardComponent),
        },
    ],
})
export class ExampleTuiInputCardComponent extends AbstractExampleTuiControl {
    @ViewChild('documentationPropertyBinChange', {
        read: TuiDocDocumentationPropertyConnectorDirective,
    })
    protected binChangeProperty?: TuiDocDocumentationPropertyConnectorDirective<unknown>;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected card = '';

    protected readonly lengthVariants: TuiCodeCVCLength[] = [3, 4];

    protected length = this.lengthVariants[0];

    protected override exampleText = '0000 0000 0000 0000';

    protected hintContentCVC = null;

    protected hintDirectionCVC: TuiHintOptions['direction'] = 'bottom-left';

    protected hintAppearanceCVC = '';

    protected readonly cards: Record<string, string> = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        intersection:
            'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected cardSrcVariants = Object.keys(this.cards);

    protected cardSrcSelected: string | null = null;

    protected autocompleteEnabledCard = false;

    protected autocompleteEnabledCVC = false;

    protected autocompleteEnabledExpire = false;

    public override cleaner = false;

    public control = new FormGroup({
        card: new FormControl('', [
            Validators.required,
            tuiCreateLuhnValidator('Invalid card number'),
        ]),
        expire: new FormControl('', Validators.required),
        cvc: new FormControl('', Validators.required),
    });

    public get cardSrc(): string | null {
        return this.cardSrcSelected === null ? null : this.cards[this.cardSrcSelected];
    }

    public get disabledCard(): boolean {
        return this.isDisabled('card');
    }

    public set disabledCard(value: boolean) {
        this.toggleDisabled(value, 'card');
    }

    public get disabledExpire(): boolean {
        return this.isDisabled('expire');
    }

    public set disabledExpire(value: boolean) {
        this.toggleDisabled(value, 'expire');
    }

    public get disabledCVC(): boolean {
        return this.isDisabled('cvc');
    }

    public set disabledCVC(value: boolean) {
        this.toggleDisabled(value, 'cvc');
    }

    public isDisabled(control: string): boolean {
        return this.control.get(control)!.disabled;
    }

    public toggleDisabled(value: boolean, control: string): void {
        if (value) {
            this.control.get(control)!.disable();

            return;
        }

        this.control.get(control)!.enable();
    }
}
