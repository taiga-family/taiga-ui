/**
 * @deprecated: drop in v5.0
 */
export function tuiIsValidUrl(url: string): boolean {
    return new RegExp(
        String.raw`^([a-zA-Z]+:\/\/)?` + // protocol
            String.raw`((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|localhost|` + // domain name
            String.raw`((\d{1,3}\.){3}\d{1,3}))` + // OR IP (v4) address
            String.raw`(\:\d+)?(\/[-a-z\d%_.~+]*)*` + // port and path
            String.raw`(\?[)(;&a-z\d%_.~+=-]*)?` + // query string
            String.raw`(\#[-a-z\d_]*)?$`, // fragment locator
        'i',
    ).test(url);
}
