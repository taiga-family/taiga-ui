import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

const content = `It's not pining, it's passed on! This parrot is no more! It has ceased to be! It's expired and gone to
meet its maker! This is a late parrot! It's a stiff! Bereft of life, it rests in peace! If you hadn't
nailed it to the perch, it would be pushing up the daisies! It's rung down the curtain and joined the
choir invisible. This is an ex-parrot!`;

@Component({
    selector: 'example-action',
    templateUrl: './action.template.html',
    encapsulation,
    changeDetection,
})
export class ExampleTuiActionComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    readonly iconVariants = [
        'tuiIconPrinterLarge',
        'tuiIconLoginLarge',
        'tuiIconCalendarLarge',
    ];

    icon = this.iconVariants[0];

    color = 'var(--tui-link)';
    background = 'var(--tui-base-02)';

    readonly content = content;

    readonly actionBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiAction: {
            type: null,
        },
        type: {
            type: null,
            value: 'button',
        },
    };
}
