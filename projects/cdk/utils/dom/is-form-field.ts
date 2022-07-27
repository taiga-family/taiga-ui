export function tuiIsFormFieldElement(
    element: unknown | null,
): element is HTMLInputElement | HTMLTextAreaElement {
    const textfield = element as Record<string, unknown> | null;

    return (
        !!textfield &&
        `value` in textfield &&
        `selectionStart` in textfield &&
        `selectionEnd` in textfield
    );
}
