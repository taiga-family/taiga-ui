import {inject, Injectable} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {WA_LOCATION} from '@ng-web-apis/common';
import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({providedIn: 'root'})
export class StackblitzDepsService {
    private readonly location = inject(WA_LOCATION);

    public async get(): Promise<Record<string, string>> {
        return {
            ...this.getAngularPackages(),
            ...this.getTaigaPackages(),
            less: '4.x.x',
            rxjs: (await import('@demo/root-package')).devDependencies.rxjs,
        };
    }

    private getAngularPackages(): Record<string, string> {
        const ngVersion = '21.x.x';

        return {
            '@angular/build': ngVersion,
            '@angular/cdk': ngVersion,
            '@angular/cli': ngVersion,
            '@angular/common': ngVersion,
            '@angular/compiler': ngVersion,
            '@angular/compiler-cli': ngVersion,
            '@angular/core': ngVersion,
            '@angular/forms': ngVersion,
            '@angular/platform-browser': ngVersion,
            '@angular/router': ngVersion,
            typescript: '5.9.x', // compatible with angular 21
        };
    }

    private getTaigaPackages(): Record<string, string> {
        const version =
            this.location.pathname.startsWith('/next/') ||
            this.location.host.endsWith('web.app') ||
            !environment.production
                ? 'canary'
                : `${TUI_VERSION.split('.')[0]}.x.x`;

        return {
            '@taiga-ui/addon-charts': version,
            '@taiga-ui/addon-commerce': version,
            '@taiga-ui/addon-mobile': version,
            '@taiga-ui/addon-table': version,
            '@taiga-ui/cdk': version,
            '@taiga-ui/core': version,
            '@taiga-ui/experimental': version,
            '@taiga-ui/i18n': version,
            '@taiga-ui/icons': version,
            '@taiga-ui/kit': version,
            '@taiga-ui/layout': version,
            '@taiga-ui/legacy': version,
            '@taiga-ui/styles': version,
        };
    }
}
