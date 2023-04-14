export function tuiNotKzRegion(value: string): boolean {
    const region = Number(value.slice(1, 4));

    return region < 600 || region > 799;
}
