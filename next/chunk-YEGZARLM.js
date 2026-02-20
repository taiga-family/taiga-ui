import"./chunk-HU6DUUP4.js";var e=`import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TUI_STRICT_MATCHER, type TuiContext, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDropdown} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

interface Country {
    id: string;
    name: string;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocInput,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    private readonly countriesI18n = inject(TUI_COUNTRIES);
    protected readonly routes = DemoRoute;
    protected readonly isMobile = inject(WA_IS_MOBILE);

    protected readonly control = new FormControl<Country | null>(null);

    protected readonly countries = computed(() =>
        Object.entries(this.countriesI18n()).map(([id, name]) => ({id, name})),
    );

    protected readonly matcherVariants: ReadonlyArray<TuiStringMatcher<Country>> = [
        TUI_STRICT_MATCHER as TuiStringMatcher<Country>,
        (item: Country, search: string) => item.id === search,
    ];

    protected matcher = this.matcherVariants[0]!;

    protected readonly textfieldContentVariants = [
        '',
        'TOP SECRET',
        ({$implicit: x}: TuiContext<any>) =>
            x.name
                .split(' ')
                .map((x: string) => '*'.repeat(x.length))
                .join(' '),
        ({$implicit: x}: TuiContext<any>) =>
            x?.name.includes('i') ? \`->\${x.name}<-\` : x?.name,
    ];

    protected strict = true;

    protected readonly databaseExample: TuiRawLoaderContent = import(
        './examples/5/database.ts?raw',
        {with: {loader: 'text'}}
    );

    protected readonly selectOptionExample: TuiRawLoaderContent = import(
        './examples/12/option.ts?raw',
        {with: {loader: 'text'}}
    );

    protected readonly handler = (item: Country): boolean =>
        item.id.charCodeAt(1) % 3 === 0;
}
`;export{e as default};
