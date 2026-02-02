import {DOCUMENT} from '@angular/common';
import {
    ApplicationRef,
    createComponent,
    createEnvironmentInjector,
    EnvironmentInjector,
    inject,
    Injectable,
    type Provider,
    type Type,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiPortalService} from '@taiga-ui/cdk/portals';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiDialogService} from '@taiga-ui/core/portals/dialog';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';

const STYLE_SELECTORS = 'style, link[rel="stylesheet"]';

export interface PopoutRef {
    readonly window: Window;
    close(): void;
}

function collectStyleNodes(doc: Document): Array<HTMLLinkElement | HTMLStyleElement> {
    return Array.from(doc.head.querySelectorAll(STYLE_SELECTORS));
}

function syncRootAttributes(source: Document, target: Document): void {
    target.documentElement.className = source.documentElement.className;
    target.documentElement.lang = source.documentElement.lang;
    target.documentElement.dir = source.documentElement.dir;
    target.body.className = source.body.className;

    Array.from(source.documentElement.attributes).forEach(({name, value}) => {
        if (name.startsWith('data-')) {
            target.documentElement.setAttribute(name, value);
        }
    });
}

function awaitStyleSheets(doc: Document, timeoutMs = 1500): Promise<void> {
    const links = Array.from(
        doc.head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
    );
    const win = doc.defaultView;

    if (!links.length || !win) return Promise.resolve();

    const timeout = new Promise<void>((resolve) => win.setTimeout(resolve, timeoutMs));

    const loads = links.map(
        (link) =>
            new Promise<void>((resolve) => {
                if (link.sheet) return resolve();

                const done = (): void => resolve();
                link.addEventListener('load', done, {once: true});
                link.addEventListener('error', done, {once: true});
            }),
    );

    return Promise.race([Promise.allSettled(loads).then(() => undefined), timeout]);
}

async function awaitDocumentFonts(doc: Document, timeoutMs = 1500): Promise<void> {
    const fonts = doc.fonts;
    const win = doc.defaultView;

    if (!fonts || !win) return;

    const timeout = new Promise<void>((resolve) => win.setTimeout(resolve, timeoutMs));
    await Promise.race([fonts.ready, timeout]);
}

function cloneStyleNode(node: Element): Element {
    // Для style это копирует текст; для link — href/атрибуты
    return node.cloneNode(true) as Element;
}

/**
 * Живое зеркало: все <style> и <link rel=stylesheet> из source.head
 * копируются в target.head при добавлении/удалении.
 *
 * Это ловит как глобальные стили, так и Angular component styles,
 * которые появляются "после первого рендера".
 */
function mirrorHeadStyles(source: Document, target: Document): () => void {
    const map = new Map<string, Element>();

    const keyOf = (el: Element): string => {
        // Ключ должен быть стабильным:
        // - link: href
        // - style: textContent + media + nonce (если есть)
        if (el.tagName.toLowerCase() === 'link') {
            const href =
                (el as HTMLLinkElement).href ||
                (el as HTMLLinkElement).getAttribute('href') ||
                '';
            return `link:${href}`;
        }

        const media = el.getAttribute('media') ?? '';
        const nonce = el.getAttribute('nonce') ?? '';
        const text = el.textContent ?? '';
        return `style:${media}:${nonce}:${text}`;
    };

    const ensure = (el: Element): void => {
        if (!el.matches(STYLE_SELECTORS)) return;

        const key = keyOf(el);
        if (map.has(key)) return;

        const cloned = cloneStyleNode(el);
        target.head.append(cloned);
        map.set(key, cloned);
    };

    // initial sync
    source.head.querySelectorAll(STYLE_SELECTORS).forEach((el) => ensure(el));

    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            for (const n of Array.from(m.addedNodes)) {
                if (n instanceof Element) ensure(n);
            }

            // удаление редко, но можно поддержать
            for (const n of Array.from(m.removedNodes)) {
                if (!(n instanceof Element)) continue;
                if (!n.matches(STYLE_SELECTORS)) continue;

                const key = keyOf(n);
                const cloned = map.get(key);
                if (cloned) {
                    cloned.remove();
                    map.delete(key);
                }
            }
        }
    });

    observer.observe(source.head, {childList: true, subtree: true});

    return () => observer.disconnect();
}

@Injectable()
export class PopoutService {
    private readonly appRef = inject(ApplicationRef);
    private readonly envInjector = inject(EnvironmentInjector);
    private readonly win = inject(WA_WINDOW);
    private readonly doc = inject(DOCUMENT);

    public async open<T>(component: Type<T>, title?: string): Promise<PopoutRef | null> {
        const popout = this.win.open('', '_blank', 'width=800,height=600');
        if (!popout) return null;

        popout.document.title = title ?? this.doc.title;

        syncRootAttributes(this.doc, popout.document);

        // 1) копируем то, что уже есть
        collectStyleNodes(this.doc).forEach((node) =>
            popout.document.head.append(node.cloneNode(true)),
        );

        // 2) и главное: включаем "живое зеркало", чтобы поймать стили,
        //    которые Angular добавит ПОСЛЕ createComponent()
        const stopMirror = mirrorHeadStyles(this.doc, popout.document);

        // дождемся базовой загрузки стилей/шрифтов, чтобы UI не дергался
        await Promise.all([
            awaitStyleSheets(popout.document),
            awaitDocumentFonts(popout.document),
        ]);
        await this.awaitStableFrame(popout.document);

        const host = popout.document.createElement('div');
        popout.document.body.append(host);

        const popoutInjector = createEnvironmentInjector(
            this.createProviders(popout),
            this.envInjector,
        );

        const componentRef = createComponent(component, {
            environmentInjector: popoutInjector,
            hostElement: host,
        });

        this.appRef.attachView(componentRef.hostView);

        let destroyed = false;
        const destroy = (): void => {
            if (destroyed) return;
            destroyed = true;

            stopMirror();

            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        };

        popout.addEventListener('beforeunload', destroy, {once: true});

        return {
            window: popout,
            close: (): void => {
                destroy();
                popout.close();
            },
        };
    }

    private createProviders(win: Window): Provider[] {
        return [
            {provide: WA_WINDOW, useValue: win},
            {provide: DOCUMENT, useValue: win.document},

            // taiga portals services
            {provide: TuiPopupService, useClass: TuiPopupService},
            tuiProvide(TuiPortalService, TuiPopupService),
            {provide: TuiDialogService, useClass: TuiDialogService},
        ];
    }

    private awaitStableFrame(doc: Document): Promise<void> {
        const w = doc.defaultView;
        if (!w) return Promise.resolve();

        return new Promise((resolve) => {
            w.requestAnimationFrame(() => w.requestAnimationFrame(() => resolve()));
        });
    }
}
