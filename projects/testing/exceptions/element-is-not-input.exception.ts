/**
 * @deprecated: drop in v5
 */
export class TuiElementIsNotInputException extends Error {
    constructor(automationId: string) {
        super(`Element ${automationId} is not <input />`);
    }
}
