import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAsOptionContent(Option)],
})
export default class Example {
    protected readonly items = Array.from(
        {length: 5},
        (_, index) => \`Option \${index + 1}\`,
    );

    protected readonly control = new FormControl<string | null>(this.items[2]!);
}
`;export{e as default};
