import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiChevronDirective,
        TuiButtonDirective,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
    ],
    templateUrl: './index.html',
    styles: [
        `
            .option {
                white-space: normal;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;

    protected readonly groups = [
        {
            label: 'Advantages of Taiga UI',
            items: [
                '🧩 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.',
                '🧙 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.',
                '🦋 Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.',
                '🛠 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.',
                '📦 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.',
                '🏗 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.',
            ],
        },
        {
            label: 'Well-engineered Taiga UI components',
            items: ['Calendar', 'Dialog', 'ComboBox', 'Select'],
        },
    ];

    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
