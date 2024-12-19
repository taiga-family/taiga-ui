import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiCard, TuiCardInputs} from '@taiga-ui/addon-commerce';
import {
    TUI_INPUT_CARD_GROUP_OPTIONS,
    TuiInputCardGroup,
    TuiThumbnailCard,
} from '@taiga-ui/addon-commerce';
import {tuiIsString} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiInputCardGroup,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    private readonly options = inject(TUI_INPUT_CARD_GROUP_OPTIONS);

    protected readonly examples = [
        'With validation',
        'With saved cards',
        'With custom card template',
        'Custom form state',
        'Custom labels',
    ];

    protected readonly cards: Record<string, PolymorpheusContent | string> = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected iconVariants: readonly string[] = Object.keys(this.cards);
    protected iconSelected: PolymorpheusContent = null;

    protected id = '';
    protected autocomplete = this.options.autocomplete;
    protected placeholder = this.options.exampleText;

    protected readonly codeLengthVariants = [3, 4] as const;
    protected codeLength: 3 | 4 = this.codeLengthVariants[0];

    protected readonly inputsVariants: readonly TuiCardInputs[] = [
        {cvc: true, expire: true},
        {cvc: false, expire: true},
        {cvc: false, expire: false},
        {cvc: true, expire: false},
    ];

    protected inputs = this.options.inputs;

    protected formControl = new FormControl<TuiCard | null>(null);

    protected get icon(): PolymorpheusContent {
        return tuiIsString(this.iconSelected)
            ? this.cards[this.iconSelected]
            : this.iconSelected;
    }

    protected getContentVariants(
        template: PolymorpheusContent,
    ): readonly PolymorpheusContent[] {
        return [...this.iconVariants, template];
    }
}
