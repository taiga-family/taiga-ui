import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

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

    protected selectOptionExample: TuiRawLoaderContent = import(
        './examples/2/option.ts?raw'
    );

    protected items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    protected readonly control = new FormControl(null);
}
