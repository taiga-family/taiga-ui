export class TuiNoHostException extends Error {
    constructor() {
        super(ngDevMode ? `Portals cannot be used without TuiPortalHostComponent` : ``);
    }
}
