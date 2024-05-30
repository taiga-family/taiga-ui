import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly exampleServiceUsage = import(
        './examples/import/service-usage.md?raw'
    );

    protected readonly exampleServiceUsageHtml = import(
        './examples/import/service-usage-html.md?raw'
    );

    protected readonly exampleModule = import('./examples/import/import.md?raw');
    protected readonly exampleHtmlHost = import('./examples/import/template-host.md?raw');
    protected readonly exampleHtml = import('./examples/import/template.md?raw');
}
