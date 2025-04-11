import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiDropdown, TuiTextfield} from '@taiga-ui/core';
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
        TuiDocDropdown,
        TuiDocTextfield,
        TuiDropdown,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly control = new FormControl<string | null>(null);
    protected textfieldContent: PolymorpheusContent = '';

    protected readonly items = new Array(30).fill(null).map((_, i) => `Option ${i + 1}`);

    protected readonly textfieldContentVariants = computed(() => [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContext<string>) => (val.includes('4') ? 'IV' : val),
    ]);

    protected selectOptionExample: TuiRawLoaderContent = import(
        './examples/9/option.ts?raw'
    );
}
