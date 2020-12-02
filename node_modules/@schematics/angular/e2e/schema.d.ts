/**
 * Generates a new, generic end-to-end test definition for the given or default project.
 */
export interface Schema {
    /**
     * The name of the app being tested.
     */
    relatedAppName: string;
    /**
     * The HTML selector for the root component of the test app.
     */
    rootSelector?: string;
}
