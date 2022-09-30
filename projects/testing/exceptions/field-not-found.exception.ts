export class TuiFieldNotFoundException extends Error {
    constructor(automationId: string) {
        super(`Field ${automationId} not found`);
    }
}
