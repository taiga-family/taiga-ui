/**
 * Runs `task` and, if it throws, prefixes the error message with `context` so a
 * migration failure points at the file/step that produced it instead of showing
 * only a stack trace into the compiled schematic.
 */
export function withMigrationContext<T>(context: string, task: () => T): T {
    try {
        return task();
    } catch (error: unknown) {
        if (error instanceof Error) {
            // Mutate in place to keep the original stack frames (the real crash
            // site); wrapping in a new Error would bury them behind `cause`.
            error.message = `${context}\n${error.message}`;

            throw error;
        }

        throw new Error(`${context}\n${String(error)}`);
    }
}
