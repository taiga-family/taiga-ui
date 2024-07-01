import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {TuiInputCardGroup, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {tuiIsString, tuiProvide} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {InheritedDocumentation} from '../abstract/inherited-documentation';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputCardGroup,
        ReactiveFormsModule,
        TuiThumbnailCard,
        InheritedDocumentation,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiInteractive {
    protected readonly examples = [
        'With validation',
        'With saved cards',
        'With custom card template',
        'Custom form state',
        'Custom labels',
    ];

    protected readonly cards: Record<string, string> = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected iconVariants: readonly string[] = Object.keys(this.cards);

    protected iconSelected: PolymorpheusContent = null;

    protected autocomplete = false;

    protected exampleText = '0000 0000 0000 0000';

    protected readonly codeLengthVariants = [3, 4] as const;

    protected codeLength: 3 | 4 = this.codeLengthVariants[0];

    protected pseudoInvalid: boolean | null = null;

    protected readOnly = false;

    protected control = new FormControl<TuiCard | null>(null);

    protected get icon(): PolymorpheusContent {
        return tuiIsString(this.iconSelected)
            ? this.cards[this.iconSelected]
            : this.iconSelected;
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
        return [...this.iconVariants, template];
    }
}
