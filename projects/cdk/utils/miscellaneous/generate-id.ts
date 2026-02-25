let autoId = 0;

export function tuiGenerateId(): string {
    return `tui_${autoId++}${Date.now().toString(36)}`;
}
