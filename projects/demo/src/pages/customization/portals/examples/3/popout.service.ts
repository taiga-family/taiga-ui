/* eslint-disable @angular-eslint/no-experimental */
import {DOCUMENT} from '@angular/common';
import {
    inject,
    Injectable,
    provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {createApplication} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {provideTaiga} from '@taiga-ui/core';

import {Popout} from './popout';

export interface PopoutRef {
    readonly window: Window;
    close(): void;
}

@Injectable({providedIn: 'root'})
export class PopoutService {
    private readonly pip = inject(WA_DOCUMENT_PIP);
    private readonly win = inject(WA_WINDOW);
    private readonly doc = inject(DOCUMENT);

    public async open(title = 'Portals: Popout'): Promise<PopoutRef | null> {
        const popout = await this.pip?.requestWindow({
            width: 300,
            height: 500,
        });

        if (!popout) {
            return null;
        }

        popout.document.body.innerHTML = `
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
        `;

        this.copyGlobalStyles(this.doc, popout.document);

        const host = popout.document.querySelector('#app');
        const app = await createApplication({
            providers: [
                provideTaiga(),
                {provide: WA_WINDOW, useValue: popout},
                {provide: DOCUMENT, useValue: popout.document},
                provideExperimentalZonelessChangeDetection(),
            ],
        });

        const compRef = app.bootstrap(Popout, host);

        popout.addEventListener(
            'beforeunload',
            () => {
                compRef.destroy();
                app.destroy();
            },
            {once: true},
        );

        this.win.addEventListener('beforeunload', () => popout.close(), {once: true});

        return {
            window: popout,
            close: () => popout.close(),
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
