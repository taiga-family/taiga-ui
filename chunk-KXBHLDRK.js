import"./chunk-HU6DUUP4.js";var e=`import {Component, computed, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiCarousel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiPager, TuiProgress} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCard, TuiCarousel, TuiPager, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly index = signal(0);
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

    protected readonly clamped = computed(
        () =>
            ((this.index() % this.items.length) + this.items.length) % this.items.length,
    );
}
`;export{e as default};
