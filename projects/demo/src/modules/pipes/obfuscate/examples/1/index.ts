import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiObfuscateOptionProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiObfuscatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiObfuscateOptionProvider({
            recipes: {
                city: (value: string): string => 'x'.repeat(value.length),
            },
        }),
    ],
})
export default class Example {}
