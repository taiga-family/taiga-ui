const IFRAME: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    visibility: 'hidden',
    pointerEvents: 'none',
};

const BODY: Partial<CSSStyleDeclaration> = {
    height: 'fit-content',
    lineHeight: '1em',
    fontSize: 'calc(env(preferred-text-scale) * 1em)',
};

export function tuiFontSizeWatcher(
    callback: (fontSize: number) => void,
    iframe: HTMLIFrameElement = globalThis.document.createElement('iframe'),
): () => void {
    const resize = (): void => {
        const {
            innerWidth = 0,
            outerWidth = 0,
            devicePixelRatio = 0,
        } = iframe.contentDocument?.defaultView || {};

        iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
    };

    iframe.contentDocument?.body.append(iframe);
    iframe.contentDocument?.defaultView?.addEventListener('resize', resize);

    const doc = iframe.contentWindow?.document;
    const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));

    Object.assign(iframe.style, IFRAME);
    Object.assign(doc?.body.style || {}, BODY);
    doc?.documentElement.style.setProperty('font', '-apple-system-body');
    doc?.body.insertAdjacentText('beforeend', '.'.repeat(1000));
    observer.observe(doc?.body || iframe);
    resize();

    return () => {
        observer.disconnect();
        iframe.remove();
        iframe.contentDocument?.defaultView?.removeEventListener('resize', resize);
    };
}
