const IFRAME = 'position: fixed; visibility: hidden; pointer-events: none';
const BODY = 'height: fit-content; line-height: 1em;';

export function tuiFontSizeWatcher(
    callback: (fontSize: number) => void,
    win: Window = window,
): () => void {
    const iframe = win.document.createElement('iframe');
    const resize = (): void => {
        const {innerWidth, outerWidth, devicePixelRatio} = win;

        iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
    };

    win.document.body.append(iframe);
    win.addEventListener('resize', resize);

    const doc = iframe.contentWindow?.document;
    const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));

    iframe.setAttribute('style', IFRAME);
    doc?.documentElement.style.setProperty('font', '-apple-system-body');
    doc?.body.setAttribute('style', BODY);
    doc?.body.insertAdjacentText('beforeend', '.'.repeat(1000));
    observer.observe(doc?.body || iframe);
    resize();

    return () => {
        observer.disconnect();
        iframe.remove();
        win.removeEventListener('resize', resize);
    };
}
