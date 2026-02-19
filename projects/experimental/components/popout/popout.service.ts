import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injectable,
    type OnDestroy,
    type OnInit,
    provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {createApplication} from '@angular/platform-browser';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {TuiPortal, type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {provideTaiga, TUI_OPTIONS} from '@taiga-ui/core/utils/miscellaneous';
import {injectContext, provideContext} from '@taiga-ui/polymorpheus';

import {TuiPopoutComponent, type TuiPopoutOptions} from './popout.component';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class PopoutComponent implements OnInit, OnDestroy {
    private readonly pip = inject(WA_DOCUMENT_PIP);
    private readonly context = injectContext<TuiPortalContext<TuiPopoutOptions>>();
    private readonly doc = inject(DOCUMENT);
    private readonly options = inject(TUI_OPTIONS);
    private popout: Window | null = null;

    public ngOnInit(): void {
        if (this.context.pip && this.pip) {
            this.pip
                .requestWindow(this.context.features)
                .then((popout) => this.process(popout))
                .catch((error: unknown) => {
                    this.context.$implicit.complete();
                    throw error;
                });
        } else {
            this.process(
                this.doc.defaultView?.open(
                    '',
                    '_blank',
                    Object.entries(this.context.features)
                        .map(([key, value]) => `${key}=${value}`)
                        .concat(this.context.pip ? 'popup' : [])
                        .join(','),
                ),
            );
        }
    }

    public ngOnDestroy(): void {
        this.popout?.close();
    }

    private process(popout?: Window | null): void {
        if (!popout) {
            this.context.$implicit.complete();

            return;
        }

        this.popout = popout;
        this.popout.document.write(`
          <!doctype html>
          <html lang="${this.doc.documentElement.getAttribute('lang') || 'en'}">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width,initial-scale=1" />
            </head>
            <body></body>
          </html>
        `);
        this.popout.document.title = this.context.title;
        this.popout.document.close();
        this.doc.head
            .querySelectorAll('base, style, link[rel="stylesheet"]')
            .forEach((node) => this.popout?.document.head.append(node.cloneNode(true)));

        const providers = [
            provideTaiga(this.options),
            provideContext(this.context),
            {provide: DOCUMENT, useValue: this.popout.document},
            provideExperimentalZonelessChangeDetection(),
        ];

        createApplication({providers})
            .then((app) => {
                const ref = app.bootstrap(TuiPopoutComponent, this.popout?.document.body);
                const cleanup = (): void => this.popout?.close();

                this.doc.defaultView?.addEventListener('pagehide', cleanup);
                this.popout?.addEventListener('pagehide', () => {
                    this.context.$implicit.complete();
                    ref.destroy();
                    app.destroy();
                    this.doc.defaultView?.removeEventListener('pagehide', cleanup);
                });
            })
            .catch((error: unknown) => {
                this.context.$implicit.complete();
                throw error;
            });
    }
}

@Injectable({providedIn: 'root'})
export class TuiPopoutService extends TuiPortal<TuiPopoutOptions> {
    protected readonly component = PopoutComponent;
    protected readonly options = {title: '', features: {}, pip: false};

    constructor() {
        super(inject(TuiPopupService));
    }
}
