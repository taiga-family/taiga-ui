import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputCard,
        TuiTextfield,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected card = '';

    protected readonly form = new FormGroup({
        card: new FormControl(''),
    });

    protected formControl = new FormControl<TuiCard['card'] | null>(null);

    protected readonly cards: Record<string, string> = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected readonly iconVariants: readonly string[] = Object.keys(this.cards);
    protected iconSelected = '';

    protected get icon(): string | null {
        return this.cards[this.iconSelected] ?? '';
    }
}
