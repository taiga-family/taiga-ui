export function tuiComponentsExcluded(path: string, sample: number): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const map: Map<string, number[]> = new Map(Cypress.env(`componentsExclusion`) ?? []);
    const exclusions = map.get(path) ?? [];

    return !!exclusions?.includes(sample);
}
