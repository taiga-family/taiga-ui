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
        } = iframe.ownerDocument?.defaultView || {};

        iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
    };

    iframe.ownerDocument?.body.append(iframe);
    iframe.ownerDocument?.defaultView?.addEventListener('resize', resize);

    const doc = iframe.contentDocument;
    const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));

    Object.assign(iframe.style, IFRAME);
    Object.assign(doc?.body.style || {}, BODY);
    doc?.documentElement.style.setProperty('font', '-apple-system-body');
    doc?.body.insertAdjacentText('beforeend', '.'.repeat(1000));
    observer.observe(doc?.body || iframe);
    resize();

    return () => {
        observer.disconnect();
        iframe.ownerDocument?.defaultView?.removeEventListener('resize', resize);
        iframe.remove();
    };
}
