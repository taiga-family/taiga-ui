import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly taigaFamilyLibs = [
        {
            name: 'Taiga UI',
            libraries: [
                '@taiga-ui/cdk',
                '@taiga-ui/core',
                '@taiga-ui/kit',
                '@taiga-ui/addon-doc',
                '@taiga-ui/addon-charts',
                '@taiga-ui/addon-commerce',
                '@taiga-ui/addon-table',
                '@taiga-ui/addon-mobile',
            ],
        },
        {
            name: 'Maskito',
            libraries: [
                '@maskito/core',
                '@maskito/kit',
                '@maskito/phone',
                '@maskito/react',
                '@maskito/angular',
                '@maskito/vue',
            ],
        },
        {
            name: 'Web APIs for Angular',
            libraries: [
                '@ng-web-apis/common',
                '@ng-web-apis/platform',
                '@ng-web-apis/intersection-observer',
                '@ng-web-apis/resize-observer',
                '@ng-web-apis/mutation-observer',
                '@ng-web-apis/view-transition',
                '@ng-web-apis/universal',
                '@ng-web-apis/storage',
                '@ng-web-apis/geolocation',
            ],
        },
    ];

    protected value: string | null = null;
}
