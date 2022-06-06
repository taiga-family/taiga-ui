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
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
        'prompt/prompt.service.ts': import(
            '!!raw-loader!./examples/1/prompt/prompt.service.ts'
        ),
        'prompt/prompt-options.ts': import(
            '!!raw-loader!./examples/1/prompt/prompt-options.ts'
        ),
        'prompt/prompt.component.ts': import(
            '!!raw-loader!./examples/1/prompt/prompt.component.ts'
        ),
        'prompt/prompt.template.html': import(
            '!!raw-loader!./examples/1/prompt/prompt.template.html'
        ),
        'prompt/prompt.style.less': import(
            '!!raw-loader!./examples/1/prompt/prompt.style.less'
        ),
        'prompt/prompt.module.ts': import(
            '!!raw-loader!./examples/1/prompt/prompt.module'
        ),
    };
}
