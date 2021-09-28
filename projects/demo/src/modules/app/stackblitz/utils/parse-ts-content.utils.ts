export function addIntoExistingImport(
    data: string = '',
    entity: string = '',
    packageName: string = '',
): string {
    const packageImportsRegex = new RegExp(
        `(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${packageName}(?:'|");`,
        'gm',
    );

    return data.replace(packageImportsRegex, parsed => {
        return parsed.replace('{', `{${entity}, `);
    });
}

export function addImport(
    fileContent: string,
    entity: string,
    packageName: string,
): string {
    if (fileContent.includes(packageName)) {
        return addIntoExistingImport(fileContent, entity, packageName);
    }

    return `import {${entity}} from '${packageName}';\n ${fileContent};`;
}
