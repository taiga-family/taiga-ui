import {Inject, Injectable} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {LOCATION} from '@ng-web-apis/common';
import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({providedIn: `root`})
export class StackblitzDepsService {
    constructor(@Inject(LOCATION) private readonly location: Location) {}

    async get(): Promise<Record<string, string>> {
        return {
            ...(await this.getAngularPackages()),
            ...this.getTaigaPackages(),
            ...(await this.getCommonPackages()),
            ...(await this.getEditorPackagesOrEmpty()),
        };
    }

    private async getAngularPackages(): Promise<Record<string, string>> {
        const {dependencies} = await import(`@demo/root-package`);
        const ngVersion = `${dependencies[`@angular/cdk`]?.split(`.`)?.[0] ?? ``}.x.x`;

        return {
            '@angular/cdk': ngVersion,
            '@angular/core': ngVersion,
            '@angular/common': ngVersion,
            '@angular/compiler': ngVersion,
            '@angular/forms': ngVersion,
            '@angular/localize': ngVersion,
            '@angular/platform-browser': ngVersion,
            '@angular/platform-browser-dynamic': ngVersion,
            '@angular/animations': ngVersion,
            '@angular/router': ngVersion,
        };
    }

    private getTaigaPackages(): Record<string, string> {
        const version =
            this.location.pathname.startsWith(`/next/`) ||
            this.location.host.endsWith(`web.app`) ||
            !environment.production
                ? `dev`
                : `${TUI_VERSION.split(`.`)[0]}.x.x`;

        return {
            '@taiga-ui/cdk': version,
            '@taiga-ui/i18n': version,
            '@taiga-ui/core': version,
            '@taiga-ui/kit': version,
            '@taiga-ui/icons': version,
            '@taiga-ui/styles': version,
            '@taiga-ui/addon-charts': version,
            '@taiga-ui/addon-commerce': version,
            '@taiga-ui/addon-editor': version,
            '@taiga-ui/addon-mobile': version,
            '@taiga-ui/addon-preview': version,
            '@taiga-ui/addon-table': version,
            '@taiga-ui/addon-tablebars': version,
        };
    }

    private async getCommonPackages(): Promise<Record<string, string>> {
        const {dependencies: demoDeps} = await import(`@taiga-ui/demo/package.json`);
        const {dependencies: cdkDeps} = await import(`@taiga-ui/cdk/package.json`);
        const {dependencies: kitDeps} = await import(`@taiga-ui/kit/package.json`);
        const {dependencies: rootDeps, devDependencies: rootDevDeps} = await import(
            `@demo/root-package`
        );

        return {
            '@tinkoff/ng-dompurify': demoDeps[`@tinkoff/ng-dompurify`],
            '@tinkoff/ng-polymorpheus': cdkDeps[`@tinkoff/ng-polymorpheus`],
            '@ng-web-apis/common': cdkDeps[`@ng-web-apis/common`],
            '@tinkoff/ng-event-plugins': cdkDeps[`@tinkoff/ng-event-plugins`],
            '@ng-web-apis/intersection-observer':
                kitDeps[`@ng-web-apis/intersection-observer`],
            '@ng-web-apis/resize-observer': cdkDeps[`@ng-web-apis/resize-observer`],
            '@ng-web-apis/mutation-observer': cdkDeps[`@ng-web-apis/mutation-observer`],
            'text-mask-core': kitDeps[`text-mask-core`],
            'zone.js': rootDeps[`zone.js`],
            dompurify: demoDeps.dompurify,
            rxjs: rootDeps.rxjs,
            typescript: rootDevDeps.typescript,
        };
    }

    private async getEditorPackagesOrEmpty(): Promise<Record<string, string>> {
        return this.location.pathname.includes(`/editor/`)
            ? (await import(`@taiga-ui/addon-editor/package.json`)).dependencies
            : {};
    }
}
