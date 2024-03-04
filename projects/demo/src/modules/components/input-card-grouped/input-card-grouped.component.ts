import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiCard, type TuiCodeCVCLength} from '@taiga-ui/addon-commerce';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiIsString} from '@taiga-ui/cdk';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly cards: Record<string, string> = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected cardSrcVariants: readonly string[] = Object.keys(this.cards);

    protected cardSrcSelected: PolymorpheusContent = '';

    protected autocompleteEnabled = false;

    protected exampleText = '0000 0000 0000 0000';

    protected readonly codeLengthVariants: TuiCodeCVCLength[] = [3, 4];

    protected codeLength: TuiCodeCVCLength = this.codeLengthVariants[0];

    protected pseudoInvalid: boolean | null = null;

    protected readOnly = false;

    protected control = new FormControl<TuiCard | null>(null);

    protected get cardSrc(): PolymorpheusContent {
        return tuiIsString(this.cardSrcSelected)
            ? this.cards[this.cardSrcSelected]
            : this.cardSrcSelected;
    }

    protected get disabled(): boolean {
        return this.control.disabled;
    }

    protected set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }

    protected getContentVariants(
        template: PolymorpheusContent,
    ): readonly PolymorpheusContent[] | null {
        return [...this.cardSrcVariants, template];
    }
}
