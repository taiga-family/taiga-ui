import"./chunk-HU6DUUP4.js";var t=`import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiDropdown, TuiInput} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Country {
    id: string;
    name: string;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocInput,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiInput,
        TuiSelect,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    private readonly countriesI18n = inject(TUI_COUNTRIES);
    protected readonly routes = DemoRoute;

    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly control = new FormControl<Country | null>({
        id: 'US',
        name: 'USA',
    });

    protected readonly countries = computed(() =>
        Object.entries(this.countriesI18n()).map(([id, name]) => ({id, name})),
    );

    protected readonly textfieldContentVariants = [
        '',
        'TOP SECRET',
        ({$implicit: x}: TuiContext<any>) =>
            x?.name.includes('i') ? \`->\${x.name}<-\` : x?.name,
    ];

    protected selectOptionExample: TuiRawLoaderContent = import(
        './examples/10/option.ts?raw',
        {with: {loader: 'text'}}
    );

    protected readonly handler = (item: Country): boolean =>
        item.id.charCodeAt(1) % 3 === 0;
}
`;export{t as default};
