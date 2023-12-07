import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID, Provider} from '@angular/core';
import {TUI_IS_E2E, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

declare global {
    interface Window {
        ym(
            id: number | string,
            type: string,
            url: string,
            options?: Partial<HitOptions>,
        ): void;
    }
}

interface HitOptions {
    referer?: string;
    params?: any;
    title?: any;
}

interface YaMetrikaOptions {
    id: number | string;
    debug: boolean;
}

const YA_METRIKA_DEFAULT_OPTIONS: YaMetrikaOptions = {
    id: ``,
    debug: false,
};

export const YA_METRIKA_OPTIONS = tuiCreateToken<YaMetrikaOptions>(
    YA_METRIKA_DEFAULT_OPTIONS,
);

export function metrikaOptionsProvider(options: Partial<YaMetrikaOptions>): Provider {
    return tuiProvideOptions(YA_METRIKA_OPTIONS, options, YA_METRIKA_DEFAULT_OPTIONS);
}

@Injectable({providedIn: `root`})
export class YaMetrikaService {
    constructor(
        @Inject(YA_METRIKA_OPTIONS)
        private readonly options: YaMetrikaOptions,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(PLATFORM_ID) platformId: Record<string, string>,
        @Inject(TUI_IS_E2E) isE2E: boolean,
    ) {
        if (options.debug || (isPlatformBrowser(platformId) && !ngDevMode && !isE2E)) {
            const script = this.doc.createElement(`script`);

            script.async = true;
            // https://yandex.ru/support/metrica/code/counter-initialize.html
            script.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(${this.options.id}, "init", {clickmap: false, webvisor: false});`;

            this.doc.body.appendChild(script);
        }
    }

    hit(url: string, options: HitOptions = {}): void {
        this.doc.defaultView?.ym?.(this.options.id, `hit`, url, options);
    }
}
