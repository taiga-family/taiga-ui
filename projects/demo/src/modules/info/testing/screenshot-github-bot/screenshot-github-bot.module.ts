import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {ScreenshotGithubBotComponent} from './screenshot-github-bot.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(ScreenshotGithubBotComponent)),
    ],
    declarations: [ScreenshotGithubBotComponent],
})
export class ScreenshotGithubBotModule {}
