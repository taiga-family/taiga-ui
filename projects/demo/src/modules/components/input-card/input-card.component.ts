import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiCodeCVCLength} from '@taiga-ui/addon-commerce';
import {tuiCreateLuhnValidator} from '@taiga-ui/addon-commerce';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiHintOptions} from '@taiga-ui/core';
import {TuiAlertService} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-input-card`,
    templateUrl: `./input-card.template.html`,
    styleUrls: [`./input-card.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCardComponent),
        },
    ],
})
export class ExampleTuiInputCardComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    card = ``;

    readonly lengthVariants: TuiCodeCVCLength[] = [3, 4];

    length = this.lengthVariants[0];

    override cleaner = false;

    override exampleText = `0000 0000 0000 0000`;

    hintContentCVC = null;

    hintDirectionCVC: TuiHintOptions['direction'] = `bottom-left`;

    hintAppearanceCVC = ``;

    readonly cards: Record<string, string> = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
    };

    cardSrcVariants = Object.keys(this.cards);

    cardSrcSelected: string | null = null;

    autocompleteEnabledCard = false;

    autocompleteEnabledCVC = false;

    autocompleteEnabledExpire = false;

    control = new FormGroup({
        card: new FormControl(``, [
            Validators.required,
            tuiCreateLuhnValidator(`Invalid card number`),
        ]),
        expire: new FormControl(``, Validators.required),
        cvc: new FormControl(``, Validators.required),
    });

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {
        super();
    }

    get cardSrc(): string | null {
        return this.cardSrcSelected === null ? null : this.cards[this.cardSrcSelected];
    }

    get disabledCard(): boolean {
        return this.isDisabled(`card`);
    }

    set disabledCard(value: boolean) {
        this.toggleDisabled(value, `card`);
    }

    get disabledExpire(): boolean {
        return this.isDisabled(`expire`);
    }

    set disabledExpire(value: boolean) {
        this.toggleDisabled(value, `expire`);
    }

    get disabledCVC(): boolean {
        return this.isDisabled(`cvc`);
    }

    set disabledCVC(value: boolean) {
        this.toggleDisabled(value, `cvc`);
    }

    isDisabled(control: string): boolean {
        return this.control.get(control)!.disabled;
    }

    toggleDisabled(value: boolean, control: string): void {
        if (value) {
            this.control.get(control)!.disable();

            return;
        }

        this.control.get(control)!.enable();
    }

    onBinChange(bin: string | null): void {
        this.alertService.open(`bin: ${bin}`).subscribe();
    }
}
