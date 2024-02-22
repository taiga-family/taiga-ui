import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-theme-night',
    templateUrl: './theme-night.template.html',
    changeDetection,
})
export class ExampleTuiThemeNightComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleComponent = import(
        './examples/import/insert-component.md?raw'
    );

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
}
