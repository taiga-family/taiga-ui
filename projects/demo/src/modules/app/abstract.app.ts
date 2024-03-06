import type {OnInit} from '@angular/core';
import {Directive, ElementRef, HostBinding, inject} from '@angular/core';
import type {Router} from '@angular/router';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {TuiDestroyService, tuiPure} from '@taiga-ui/cdk';

import {readyToScrollFactory} from './utils/ready-to-scroll-factory';
import {TUI_SELECTED_VERSION_META} from './version-manager/version-manager.providers';

export const DEMO_PAGE_LOADED_PROVIDER = {
    provide: TUI_DOC_PAGE_LOADED,
    deps: [ElementRef, ResizeObserverService, TuiDestroyService],
    useFactory: readyToScrollFactory,
};

@Directive()
export abstract class AbstractDemoComponent implements OnInit {
    protected abstract readonly storage: Storage;
    protected abstract readonly router: Router;

    @HostBinding('attr.data-tui-major-version')
    protected readonly majorVersion = inject(TUI_SELECTED_VERSION_META)?.title;

    @HostBinding('class._loaded')
    protected readonly pageLoadedInit = '0';

    @HostBinding('$.class._loaded')
    protected readonly pageLoaded = inject(TUI_DOC_PAGE_LOADED);

    public async ngOnInit(): Promise<void> {
        await this.replaceEnvInURI();
    }

    @tuiPure
    protected get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 24)
        );
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem('env');

        if (env) {
            this.storage.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
