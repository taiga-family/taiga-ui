import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCard, TuiCarousel, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            title: 'Taiga UI',
            subtitle: 'Angular UI Kit',
            icon: '@img.assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            subtitle: 'Masking library',
            icon: '@img.https://raw.githubusercontent.com/taiga-family/maskito/main/projects/demo/src/assets/icons/maskito.svg',
        },
        {
            title: 'Editor',
            subtitle: 'WYSIWYG',
            icon: '@tui.pencil',
        },
    ];
}
