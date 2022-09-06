import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {tuiPure, TuiResizeService} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

import {readyToScrollFactory} from './utils/ready-to-scroll-factory';
import {TuiVersionMeta} from './version-manager/versions.constants';

export const DEMO_PAGE_LOADED_PROVIDER = {
    provide: TUI_DOC_PAGE_LOADED,
    deps: [ElementRef, TuiResizeService],
    useFactory: readyToScrollFactory,
};

@Directive()
export abstract class AbstractDemoComponent implements OnInit {
    protected abstract readonly storage: Storage;
    protected abstract readonly router: Router;

    @HostBinding(`attr.data-tui-version-demo`)
    protected readonly versionDemo = this.versionMeta?.alias;

    // TODO: use inject(TUI_IS_CYPRESS) in angular v14+
    @HostBinding(`class._is-cypress-mode`)
    protected readonly isCypressMode = this.isCypress;

    @HostBinding(`class._loaded`)
    protected readonly pageLoadedInit = `0`;

    // TODO: use inject(TUI_DOC_PAGE_LOADED) in angular v14+
    @HostBinding(`$.class._loaded`)
    protected readonly pageLoaded = this.pageLoaded$;

    protected constructor(
        protected readonly isCypress: boolean,
        protected readonly pageLoaded$: Observable<boolean>,
        protected readonly versionMeta: TuiVersionMeta | null,
    ) {}

    async ngOnInit(): Promise<void> {
        await this.replaceEnvInURI();
    }

    @tuiPure
    get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 24)
        );
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem(`env`);

        if (env) {
            this.storage.removeItem(`env`);
            await this.router.navigateByUrl(env.replace(/\/[A-z0-9]*\//, ``));
        }
    }
}
