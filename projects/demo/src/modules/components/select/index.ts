import {Component, computed} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;

    protected readonly control = new FormControl<string | null>(null);
    protected textfieldContent: PolymorpheusContent = '';

    protected readonly items = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ];

    protected readonly textfieldContentVariants = computed(() => [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContext<string>) => (val.includes('4') ? 'IV' : val),
    ]);

    protected selectOptionExample: TuiRawLoaderContent = import(
        './examples/8/option.ts?raw'
    );
}
