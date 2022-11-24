export function tuiComponentsExcluded(path: string, sample: number): boolean {
    const map = new Map(Cypress.env(`componentsExclusion`) ?? []);
    const exclusions = map.get(path) ?? [];

    return !!exclusions?.includes(sample);
}
