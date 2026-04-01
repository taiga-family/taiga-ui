import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';

export const SCREENSHOT_BOT_NAME = 'Lumberjack';
export const SCREENSHOT_BOT_LINK = 'https://github.com/apps/lumberjack-bot';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly botName = SCREENSHOT_BOT_NAME;
    protected readonly botAppLink = SCREENSHOT_BOT_LINK;
    protected readonly botRepoLink = 'https://github.com/taiga-family/argus';
}
`;export{o as default};
