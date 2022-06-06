import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-input-card-grouped',
    templateUrl: './input-card-grouped.template.html',
    styleUrls: ['./input-card-grouped.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCardGroupedComponent),
        },
    ],
})
export class ExampleTuiInputCardGroupedComponent extends AbstractExampleTuiInteractive {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!../input-card-grouped/examples/4/index.ts'),
        HTML: import('!!raw-loader!../input-card-grouped/examples/4/index.html'),
    };

    readonly cards = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    cardSrcVariants: readonly string[] = Object.keys(this.cards);

    cardSrcSelected: PolymorpheusContent | null = null;

    autocompleteEnabled = false;

    exampleText = '0000 0000 0000 0000';

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

    get cardSrc(): PolymorpheusContent | null {
        return typeof this.cardSrcSelected === 'string'
            ? (this.cards as any)[this.cardSrcSelected]
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
