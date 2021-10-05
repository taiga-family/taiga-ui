import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ScreenshotGithubBotComponent} from './screenshot-github-bot.component';

@NgModule({
    declarations: [ScreenshotGithubBotComponent],
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ScreenshotGithubBotComponent)),
    ],
})
export class ScreenshotGithubBotModule {}
