import {default as exampleDecorator} from '!!raw-loader!./import/example-decorator.txt';
import {default as example2Ts} from '!!raw-loader!./pure-function.component.ts';
import {default as example1Ts} from '!!raw-loader!./pure-getter.component.ts';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-pure',
    templateUrl: './pure.template.html',
    changeDetection,
})
export class ExampleTuiPureComponent {
    readonly exampleDecorator = exampleDecorator;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
    };
}
