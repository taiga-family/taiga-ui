import {Component} from '@angular/core';

@Component({
    selector: 'screenshot-github-bot',
    templateUrl: './screenshot-github-bot.template.html',
    styleUrls: ['./screenshot-github-bot.style.less'],
})
export class ScreenshotGithubBotComponent {
    readonly botName = 'Lumberjack';
    readonly botLink = 'https://github.com/apps/lumberjack-bot';
    readonly botRepoLink = 'https://github.com/TinkoffCreditSystems/argus';
}
