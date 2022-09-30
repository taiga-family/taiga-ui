export function assets(path: TemplateStringsArray): string {
    const dirname = new URL(`.`, import.meta.url);
    const relativePath = `../assets${path.join(``)}`;

    return new URL(relativePath, dirname).toString();
}
