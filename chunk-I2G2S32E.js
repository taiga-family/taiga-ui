import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiObfuscateOptionsProvider} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiDemo, TuiTextfield],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiObfuscateOptionsProvider({recipes: {city: ({length}) => 'x'.repeat(length)}}),
    ],
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly examples = ['Basic', 'Recipes', 'Custom default'];
}
`;export{t as default};
