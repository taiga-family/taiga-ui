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
            ...(await this.getCommonPackages()),
        };
    }

    private getAngularPackages(): Record<string, string> {
        const ngVersion = '21.x.x';

        return {
            '@angular/cdk': ngVersion,
            '@angular/common': ngVersion,
            '@angular/compiler': ngVersion,
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

    private async getCommonPackages(): Promise<Record<string, string>> {
        const {peerDependencies: cdkDeps} = await import('@taiga-ui/cdk/package.json');
        const {peerDependencies: kitDeps} = await import('@taiga-ui/kit/package.json');
        const {devDependencies: rootDevDeps} = await import('@demo/root-package');

        // TODO: drop pin when StackBlitz resolves @ng-web-apis@5.4.0 (missing entrypoint in turbo_modules cache)
        const ngWebApisVersion = '5.3.0';

        return {
            '@taiga-ui/polymorpheus': cdkDeps['@taiga-ui/polymorpheus'],
            '@taiga-ui/design-tokens': (await import('@taiga-ui/styles/package.json'))
                .peerDependencies['@taiga-ui/design-tokens'],
            '@ng-web-apis/common': ngWebApisVersion,
            '@taiga-ui/event-plugins': cdkDeps['@taiga-ui/event-plugins'],
            '@taiga-ui/font-watcher': cdkDeps['@taiga-ui/font-watcher'],
            '@ng-web-apis/intersection-observer': ngWebApisVersion,
            '@ng-web-apis/platform': ngWebApisVersion,
            '@ng-web-apis/resize-observer': ngWebApisVersion,
            '@ng-web-apis/screen-orientation': ngWebApisVersion,
            '@ng-web-apis/mutation-observer': ngWebApisVersion,
            '@maskito/angular': kitDeps['@maskito/angular'],
            '@maskito/core': kitDeps['@maskito/core'],
            '@maskito/kit': kitDeps['@maskito/kit'],
            '@maskito/phone': kitDeps['@maskito/phone'],
            'libphonenumber-js': (await import('@maskito/phone/package.json'))
                .peerDependencies['libphonenumber-js'],
            rxjs: rootDevDeps.rxjs,
        };
    }
}
