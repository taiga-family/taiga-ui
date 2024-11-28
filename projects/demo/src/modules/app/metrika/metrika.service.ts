import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import type {Params} from '@angular/router';
import {TUI_IS_E2E, tuiCreateOptions} from '@taiga-ui/cdk';

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
    params?: Params;
    title?: string;
}

interface YaMetrikaOptions {
    id: number | string;
    debug: boolean;
}

export const [YA_METRIKA_OPTIONS, metrikaOptionsProvider] =
    tuiCreateOptions<YaMetrikaOptions>({id: '', debug: false});

@Injectable({
    providedIn: 'root',
})
export class YaMetrikaService {
    private readonly options = inject(YA_METRIKA_OPTIONS);
    private readonly doc = inject(DOCUMENT);
    private readonly support =
        !!this.options.id &&
        (this.options.debug ||
            (isPlatformBrowser(inject(PLATFORM_ID)) &&
                !ngDevMode &&
                !inject(TUI_IS_E2E)));

    constructor() {
        if (this.support) {
            const script = this.doc.createElement('script');

            script.async = true;
            // https://yandex.ru/support/metrica/code/counter-initialize.html
            script.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(${this.options.id}, "init", {clickmap: false, webvisor: false});`;

            this.doc.body.appendChild(script);
        }
    }

    public hit(url: string, options: HitOptions = {}): void {
        this.doc.defaultView?.ym?.(this.options.id, 'hit', url, options);
    }
}
