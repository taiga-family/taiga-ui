import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type OnInit,
    PLATFORM_ID,
} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TuiLoader} from '@taiga-ui/core';

import {TuiStackblitzService} from '../stackblitz.service';
import {appPrefix} from '../utils';

@Component({
    imports: [TuiDemo, TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiStackblitzService],
})
export default class Page implements OnInit {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly stackblitz = inject(TuiStackblitzService);

    public ngOnInit(): void {
        if (this.isBrowser) {
            void this.openStackblitz();
        }
    }

    protected async openStackblitz(): Promise<void> {
        const [appTemplate, appComponent] = await Promise.all(
            [import('./files/app.html.md'), import('./files/app.ts.md')].map(tuiRawLoad),
        ).then((markdowns) => markdowns.map((md) => tuiTryParseMarkdownCodeBlock(md)[0]));

        return this.stackblitz.openStarter(
            {
                title: 'Taiga UI Starter',
                description:
                    'A starter with Taiga UI library\nDocumentation: https://taiga-ui.dev',
                files: {
                    [appPrefix`app.html`]: appTemplate ?? '',
                    [appPrefix`app.ts`]: appComponent ?? '',
                    [appPrefix`app.less`]: "@import '@taiga-ui/styles/utils.less';",
                },
            },
            {
                newWindow: false,
                openFile: appPrefix`app.html`,
                hideExplorer: true,
            },
        );
    }
}
