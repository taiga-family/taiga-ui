import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

@Component({
    selector: 'example-tui-theme-night',
    templateUrl: './theme-night.template.html',
    changeDetection,
})
export class ExampleTuiThemeNightComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
}
