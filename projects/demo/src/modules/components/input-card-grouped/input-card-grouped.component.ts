import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: `example-input-card-grouped`,
    templateUrl: `./input-card-grouped.template.html`,
    styleUrls: [`./input-card-grouped.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCardGroupedComponent),
        },
    ],
})
export class ExampleTuiInputCardGroupedComponent extends AbstractExampleTuiInteractive {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly cards: Record<string, string> = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
    };

    cardSrcVariants: readonly string[] = Object.keys(this.cards);

    cardSrcSelected: PolymorpheusContent = ``;

    autocompleteEnabled = false;

    exampleText = `0000 0000 0000 0000`;

    readonly codeLengthVariants: TuiCodeCVCLength[] = [3, 4];

    codeLength: TuiCodeCVCLength = this.codeLengthVariants[0];

    pseudoInvalid: boolean | null = null;

    readOnly = false;

    control = new FormControl();

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {
        super();
    }

    get cardSrc(): PolymorpheusContent {
        return tuiIsString(this.cardSrcSelected)
            ? this.cards[this.cardSrcSelected]
            : this.cardSrcSelected;
    }

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }

    onBinChange(bin: string | null): void {
        this.alertService.open(`bin: ${bin}`).subscribe();
    }

    getContentVariants(
        template: PolymorpheusContent,
    ): readonly PolymorpheusContent[] | null {
        return [...this.cardSrcVariants, template];
    }
}
