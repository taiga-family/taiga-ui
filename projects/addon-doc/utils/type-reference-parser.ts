export type TuiDocTypeReferenceParsed = ReadonlyArray<{type: string; extracted: string}>;

export function tuiTypeReferenceParser(types: string): TuiDocTypeReferenceParsed {
    const generics = types.match(/<([^>]+)>/g);

    if (!generics) {
        return [];
    }

    const escaped = generics
        .reduce(
            (result, current) => result.replace(current, current.replace(/\|/g, `&`)),
            types,
        )
        .split(`|`)
        .map(item => item.trim());

    return escaped.reduce<TuiDocTypeReferenceParsed>((result, type) => {
        let extracted = type
            .trim()
            .replace(/readonly /g, ``)
            .replace(/\[\]/g, ``);

        extracted =
            extracted.match(/ReadonlyArray<([^>]+)>/)?.[1]?.split(`&`)?.[0] ?? extracted;
        extracted = extracted.match(/\[([^\]]+)\]/)?.[1]?.split(`,`)?.[0] ?? extracted;
        extracted = (extracted.split(`<`)?.[0] ?? extracted)?.trim() ?? ``;
        extracted = Number.isNaN(parseFloat(extracted)) ? extracted : `number`;
        extracted = /^'(.+)'$|^"(.+)"$|^`(.+)`$/.test(extracted) ? `string` : extracted;
        extracted = extracted.length === 1 ? `unknown` : extracted;

        return result.concat({type: type.replace(/&/g, `|`), extracted});
    }, []);
}
