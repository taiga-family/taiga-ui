import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'icons-bundled',
    templateUrl: './icons-bundled.template.html',
    styleUrls: ['./icons-bundled.style.less'],
    changeDetection,
})
export class IconsBundledComponent {
    exampleSanitizer = import('./examples/1/sanitizer.md?raw');

    injectService = import('./examples/1/inject-service.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        './inline-svg.ts': import('./examples/1/inline-svg.ts?raw'),
    };
}
