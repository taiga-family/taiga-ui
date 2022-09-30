export class TuiNoHostException extends Error {
    constructor() {
        super(`Portals cannot be used without TuiPortalHostComponent`);
    }
}
