import {inject, Injectable} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {LOCATION} from '@ng-web-apis/common';
import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({
    providedIn: 'root',
})
export class StackblitzDepsService {
    private readonly location = inject(LOCATION);

    public async get(): Promise<Record<string, string>> {
        return {
            ...this.getAngularPackages(),
            ...this.getTaigaPackages(),
            ...(await this.getCommonPackages()),
        };
    }

    private getAngularPackages(): Record<string, string> {
        const ngVersion = '18.x.x';

        return {
            '@angular/animations': ngVersion,
            '@angular/cdk': ngVersion,
            '@angular/common': ngVersion,
            '@angular/compiler': ngVersion,
            '@angular/core': ngVersion,
            '@angular/forms': ngVersion,
            '@angular/platform-browser': ngVersion,
            '@angular/router': ngVersion,
            typescript: '5.4.x', // compatible with angular 18
        };
    }

    private getTaigaPackages(): Record<string, string> {
        const version =
            this.location.pathname.startsWith('/next/') ||
            this.location.host.endsWith('web.app') ||
            !environment.production
                ? 'next' // TODO: replace with 'canary' after 4.0.0 release
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
        const {dependencies: demoDeps} = await import('@taiga-ui/demo/package.json');
        const {peerDependencies: cdkDeps} = await import('@taiga-ui/cdk/package.json');
        const {peerDependencies: kitDeps} = await import('@taiga-ui/kit/package.json');
        const {devDependencies: rootDevDeps} = await import('@demo/root-package');

        return {
            '@taiga-ui/dompurify': demoDeps['@taiga-ui/dompurify'],
            '@taiga-ui/polymorpheus': cdkDeps['@taiga-ui/polymorpheus'],
            '@ng-web-apis/common': cdkDeps['@ng-web-apis/common'],
            '@taiga-ui/event-plugins': cdkDeps['@taiga-ui/event-plugins'],
            '@ng-web-apis/intersection-observer':
                kitDeps['@ng-web-apis/intersection-observer'],
            '@ng-web-apis/resize-observer': cdkDeps['@ng-web-apis/resize-observer'],
            '@ng-web-apis/mutation-observer': cdkDeps['@ng-web-apis/mutation-observer'],
            '@maskito/angular': kitDeps['@maskito/angular'],
            '@maskito/core': kitDeps['@maskito/core'],
            '@maskito/kit': kitDeps['@maskito/kit'],
            '@maskito/phone': kitDeps['@maskito/phone'],
            'libphonenumber-js': (await import('@maskito/phone/package.json'))
                .peerDependencies['libphonenumber-js'],
            dompurify: (await import('@taiga-ui/dompurify/package.json')).peerDependencies
                .dompurify,
            rxjs: rootDevDeps.rxjs,
        };
    }
}
