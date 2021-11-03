import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as examplePromptOptions} from '!!raw-loader!./examples/1/prompt/prompt-options.ts';
import {default as examplePromptComp} from '!!raw-loader!./examples/1/prompt/prompt.component.ts';
import {default as examplePromptModule} from '!!raw-loader!./examples/1/prompt/prompt.module';
import {default as examplePromptService} from '!!raw-loader!./examples/1/prompt/prompt.service.ts';
import {default as examplePromptLess} from '!!raw-loader!./examples/1/prompt/prompt.style.less';
import {default as examplePromptHtml} from '!!raw-loader!./examples/1/prompt/prompt.template.html';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'dialogs',
    templateUrl: './dialogs.template.html',
    changeDetection,
})
export class DialogsComponent {
    readonly example1 = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
        'prompt/prompt.service.ts': examplePromptService,
        'prompt/prompt-options.ts': examplePromptOptions,
        'prompt/prompt.component.ts': examplePromptComp,
        'prompt/prompt.template.html': examplePromptHtml,
        'prompt/prompt.style.less': examplePromptLess,
        'prompt/prompt.module.ts': examplePromptModule,
    };
}
