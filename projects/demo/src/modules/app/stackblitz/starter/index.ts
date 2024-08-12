import {isPlatformBrowser} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TuiLoader} from '@taiga-ui/core';

import {TuiStackblitzService} from '../stackblitz.service';
import {appPrefix} from '../utils';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiStackblitzService],
})
export default class Page implements OnInit {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly stackblitz = inject(TuiStackblitzService);

    public async ngOnInit(): Promise<void> {
        if (this.isBrowser) {
            await this.openStackblitz();
        }
    }

    protected async openStackblitz(): Promise<void> {
        const [appTemplate, appComponent] = await Promise.all(
            [
                import('./files/app.template.html.md?raw'),
                import('./files/app.component.ts.md?raw'),
            ].map(tuiRawLoad),
        ).then((markdowns) => markdowns.map((md) => tuiTryParseMarkdownCodeBlock(md)[0]));

        return this.stackblitz.openStarter(
            {
                title: 'Taiga UI Starter',
                description:
                    'A starter with Taiga UI library\nDocumentation: https://taiga-ui.dev',
                files: {
                    [appPrefix`app.template.html`]: appTemplate,
                    [appPrefix`app.component.ts`]: appComponent,
                    [appPrefix`app.style.less`]:
                        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
                },
            },
            {
                newWindow: false,
                openFile: appPrefix`app.template.html`,
                hideExplorer: true,
            },
        );
    }
}
