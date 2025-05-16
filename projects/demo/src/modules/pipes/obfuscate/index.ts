import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocObfuscate} from '@demo/components/obfuscate';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiObfuscateOptionProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocObfuscate,
        TuiObfuscatePipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiObfuscateOptionProvider({
            recipes: {
                city: (value: string): string => '*'.repeat(value.length),
            },
        }),
    ],
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    public readonly control = new FormControl('Moscow');
}
