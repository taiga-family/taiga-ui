export function tuiComponentsExcluded(path: string, sample: number): boolean {
    const exclusions = Cypress.env(`componentsExclusion`).get(path);

    return !!exclusions && exclusions.includes(sample);
}
