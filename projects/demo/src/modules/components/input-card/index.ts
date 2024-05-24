import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiCodeCVCLength} from '@taiga-ui/addon-commerce';
import {
    tuiCreateLuhnValidator,
    TuiInputCardComponent,
    TuiInputCVCComponent,
    TuiInputExpireComponent,
} from '@taiga-ui/addon-commerce';
import {TuiDocDocumentationPropertyConnectorDirective} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiHintOptions} from '@taiga-ui/core';
import {TuiErrorComponent, TuiHint, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiAccordion, TuiFieldErrorPipeModule} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiHint,
        ReactiveFormsModule,
        TuiInputCardComponent,
        TuiInputExpireComponent,
        TuiTextfieldControllerModule,
        TuiInputCVCComponent,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        TuiAccordion,
        InheritedDocumentationModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    public control = new FormGroup({
        card: new FormControl('', [
            Validators.required,
            tuiCreateLuhnValidator('Invalid card number'),
        ]),
        expire: new FormControl('', Validators.required),
        cvc: new FormControl('', Validators.required),
    });

    public override cleaner = false;

    public override exampleText = '0000 0000 0000 0000';

    @ViewChild('documentationPropertyBinChange', {
        read: TuiDocDocumentationPropertyConnectorDirective,
    })
    protected binChangeProperty?: TuiDocDocumentationPropertyConnectorDirective<unknown>;

    protected card = '';

    protected readonly lengthVariants: TuiCodeCVCLength[] = [3, 4];

    protected length = this.lengthVariants[0];

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

    protected get cardSrc(): string | null {
        return this.cardSrcSelected === null ? null : this.cards[this.cardSrcSelected];
    }

    protected get disabledCard(): boolean {
        return this.isDisabled('card');
    }

    protected set disabledCard(value: boolean) {
        this.toggleDisabled(value, 'card');
    }

    protected get disabledExpire(): boolean {
        return this.isDisabled('expire');
    }

    protected set disabledExpire(value: boolean) {
        this.toggleDisabled(value, 'expire');
    }

    protected get disabledCVC(): boolean {
        return this.isDisabled('cvc');
    }

    protected set disabledCVC(value: boolean) {
        this.toggleDisabled(value, 'cvc');
    }

    protected isDisabled(control: string): boolean {
        return this.control.get(control)!.disabled;
    }

    protected toggleDisabled(value: boolean, control: string): void {
        if (value) {
            this.control.get(control)!.disable();

            return;
        }

        this.control.get(control)!.enable();
    }
}
