import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeS, type TuiSizeXL} from '@taiga-ui/core';
import {TuiBadge, TuiFade, TuiRadioList} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiBadge, TuiDemo, TuiDocAppearance, TuiFade, TuiRadioList],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = [
        's',
        'm',
        'l',
        'xl',
    ];

    protected size = this.sizeVariants[1]!;
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
