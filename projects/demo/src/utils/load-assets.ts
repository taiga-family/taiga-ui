export function assets(path: TemplateStringsArray): string {
    return `./assets/${path.join(``)}`;
}
