import"./chunk-HU6DUUP4.js";var n=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items = [
        {
            name: 'John',
            surname: 'Cleese',
        },
        {
            name: 'Eric',
            surname: 'Idle',
        },
    ];

    protected readonly stringify = ({name, surname}: User): string =>
        \`\${name} \${surname}\`;
}
`;export{n as default};
