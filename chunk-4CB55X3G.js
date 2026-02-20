import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiRadioList} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiRadioList, TuiTitle],
    templateUrl: './index.html',
    styles: \`
        hr {
            block-size: 1px;
            background: var(--tui-border-normal);
            border: 0;
            margin: 1rem 0;
        }
    \`,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        vertical: new FormControl(null, Validators.required),
        disabled: new FormControl({value: null, disabled: true}),
    });

    protected readonly objects = [
        {
            name: 'King Arthur',
            description: 'Graham Chapman',
        },
        {
            name: "It's Man",
            description: 'Michael Palin',
        },
        {
            name: 'Silly Walks',
            description: 'John Cleese',
        },
    ];

    protected readonly strings = ['King Arthur', "It's Man", 'Silly Walks'];

    protected horizontal = this.strings[0]!;

    protected readonly handler: TuiBooleanHandler<string> = (item) =>
        item === this.strings[2]!;
}
`;export{r as default};
