import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

const defaultExampleContent = `<ng-template #defaultExampleContent>
    Lorem ipsum
    <br />
    Gaudeamus igitur
    <br />
    <strong>Carpe diem</strong>
    <br />
    Veni, vidi, vici
</ng-template>`;

@Component({
    selector: 'example-tui-line-clamp',
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection,
})
export class ExampleTuiLineClampComponent {
    linesLimit = 1;
    lineHeight = 24;
    maxWidth = 100;
    content = '';

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly defaultExampleContentCode = defaultExampleContent;

    readonly lineClampBaseProperties: Record<string, TuiDocumentationProperty> = {
        content: {
            type: 'input',
            value: 'defaultExampleContent',
        },
    };
}
