export class TuiElementIsNotInputException extends Error {
    constructor(automationId: string) {
        super(`Element ${automationId} is not <input />`);
    }
}
