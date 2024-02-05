import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

const content = `<img
    alt=""
    src="assets/images/roy.jpg"
/>
<tui-svg src="tuiIconSettingsLarge"></tui-svg>
I’ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched
C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears
in rain.
<button
    tuiButton
    type="button"
>
    I want more life
</button>
<button
    tuiLink
    type="button"
>
    Time to die
</button>`;

@Component({
    selector: 'example-tui-push',
    templateUrl: './push.template.html',
    encapsulation,
    changeDetection,
})
export class ExampleTuiPushComponent {
    readonly content = content;

    readonly exampleImportModule = import('./examples/import/import-module.md?raw');

    readonly exampleInsertTemplate = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    heading = '';
    type = '';

    readonly timestampVars = ['', 'A moment ago', 123456789];
    timestamp = this.timestampVars[0];
}
