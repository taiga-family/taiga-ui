import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiChevron, TuiDataList, TuiDropdown],
    templateUrl: './index.html',
    styles: \`
        .option {
            white-space: normal;
        }
    \`,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly groups = [
        {
            label: 'Advantages of Taiga UI',
            items: [
                '\u{1F9E9} Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.',
                '\u{1F9D9} Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.',
                '\u{1F98B} Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.',
                '\u{1F6E0} Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.',
                '\u{1F4E6} It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.',
                '\u{1F3D7} Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.',
            ],
        },
        {
            label: 'Well-engineered Taiga UI components',
            items: ['Calendar', 'Dialog', 'ComboBox', 'Select'],
        },
    ];

    protected readonly isMobile = inject(WA_IS_MOBILE);

    public control = new FormControl('');
}
`;export{t as default};
