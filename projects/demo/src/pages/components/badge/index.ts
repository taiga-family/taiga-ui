import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeS, type TuiSizeXL} from '@taiga-ui/core';
import {TuiBadge, TuiFade, TuiRadioList} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiBadge, TuiDemo, TuiFade, TuiRadioList],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly appearanceVariants = [
        '',
        'accent',
        'primary',
        'custom',
        'positive',
        'negative',
        'warning',
        'info',
        'neutral',
    ];

    protected appearance = this.appearanceVariants[0]!;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = [
        's',
        'm',
        'l',
        'xl',
    ];

    protected size: TuiSizeS | TuiSizeXL = this.sizeVariants[1]!;

    protected contentTypeVariants = ['text', 'with icon', 'image'];
    protected contentType = this.contentTypeVariants[0]!;

    protected readonly examples = [
        'Basic',
        'Sizes',
        'Content type (mobile platform)',
        'Long value',
        'Customization',
        'Options with DI',
    ];
}
