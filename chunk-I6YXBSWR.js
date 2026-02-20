import"./chunk-HU6DUUP4.js";var r=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiItemsHandlersProvider} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Character {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can also use input props of \`Textfield\`
         * (they will have more priority):
         * \`\`\`html
         * <tui-textfield
         *     [identityMatcher]="..."
         *     [stringify]="..."
         *     [disabledItemHandler]="..."
         * />
         * \`\`\`
         */
        tuiItemsHandlersProvider({
            stringify: signal((x: Character) => x.name),
            identityMatcher: signal((a: Character, b: Character) => a.id === b.id),
            disabledItemHandler: signal((x: Character) => x.name.includes('Trevor')),
        }),
    ],
})
export default class Example {
    protected readonly users: Character[] = [
        {id: 42, name: 'Tommy Vercetti'},
        {id: 237, name: 'Carl Johnson'},
        {id: 666, name: 'Niko Bellic'},
        {id: 999, name: 'Trevor Philips'},
        {id: 123, name: 'Michael De Santa'},
        {id: 777, name: 'Franklin Clinton'},
    ];

    protected value: Character | null = {id: 42, name: 'Tommy Vercetti'}; // !== this.users[0]
}
`;export{r as default};
