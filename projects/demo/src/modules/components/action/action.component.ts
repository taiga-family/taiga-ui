import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-action',
    templateUrl: './action.template.html',
    changeDetection,
})
export class ExampleTuiActionComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly iconVariants = [
        'tuiIconPrintLarge',
        'tuiIconLoginLarge',
        'tuiIconCalendarLarge',
    ];

    icon = this.iconVariants[0];

    color = 'var(--tui-link)';
    background = 'var(--tui-base-02)';
}
