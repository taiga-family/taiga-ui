import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'dialogs',
    templateUrl: './dialogs.template.html',
    changeDetection,
})
export class DialogsComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'prompt/prompt.service.ts': import('./examples/1/prompt/prompt.service.ts?raw'),
        'prompt/prompt-options.ts': import('./examples/1/prompt/prompt-options.ts?raw'),
        'prompt/prompt.component.ts': import(
            './examples/1/prompt/prompt.component.ts?raw'
        ),
        'prompt/prompt.template.html': import(
            './examples/1/prompt/prompt.template.html?raw'
        ),
        'prompt/prompt.style.less': import('./examples/1/prompt/prompt.style.less?raw'),
        'prompt/prompt.module.ts': import('./examples/1/prompt/prompt.module.ts?raw'),
    };
}
