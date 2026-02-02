import {DOCUMENT} from '@angular/common';
import {
    inject,
    Injectable,
    NgZone,
    provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {createApplication} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {provideTaiga} from '@taiga-ui/core';

import {PopoutWindow} from './popout-window';

export interface PopoutRef {
    readonly window: Window;
    close(): void;
}

@Injectable({providedIn: 'root'})
export class PopoutService {
    private readonly win = inject(WA_WINDOW);
    private readonly doc = inject(DOCUMENT);
    private readonly zone = inject(NgZone);

    public async open(title = 'Portals: Popout'): Promise<PopoutRef | null> {
        const popout = this.win.open(
            '',
            '_blank',
            'width=400,height=400,left=300,top=300',
        );

        if (!popout) {
            return null;
        }

        popout.document.open();
        popout.document.write(`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width,initial-scale=1" />
              <title>${title}</title>
            </head>
            <body>
              <div id="app"></div>
            </body>
          </html>
        `);
        popout.document.close();

        this.copyGlobalStyles(this.doc, popout.document);

        const host = popout.document.querySelector('#app')!;

        const {app, compRef} = await this.zone.runOutsideAngular(async () => {
            const app = await createApplication({
                providers: [
                    provideTaiga(),
                    {provide: WA_WINDOW, useValue: popout},
                    {provide: DOCUMENT, useValue: popout.document},
                    // eslint-disable-next-line @angular-eslint/no-experimental
                    provideExperimentalZonelessChangeDetection(),
                ],
            });

            const compRef = app.bootstrap(PopoutWindow, host);

            return {app, compRef};
        });

        const destroy = (): void => {
            compRef.destroy();
            app.destroy();
        };

        popout.addEventListener('beforeunload', destroy, {once: true});

        return {
            window: popout,
            close: () => {
                destroy();
                popout.close();
            },
        };
    }

    private copyGlobalStyles(source: Document, target: Document): void {
        const nodes = Array.from(
            source.head.querySelectorAll('style, link[rel="stylesheet"]'),
        );

        for (const node of nodes) {
            target.head.append(node.cloneNode(true));
        }
    }
}
