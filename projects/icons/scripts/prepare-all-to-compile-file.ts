import {readdirSync, writeFileSync} from 'fs';

export function prepareAllToCompileFile(
    iconsSrc: string,
    allToCompilePath: string,
): void {
    const icons: string[] = readdirSync(iconsSrc).filter(
        file => file.split('.').pop() === 'svg',
    );

    let importDeclarations = '';
    let exportDeclarations = '';

    for (const iconPath of icons) {
        const fileName = iconPath.split('.').shift();

        importDeclarations += `import ${fileName} from './src/${fileName}.svg';\n`;
        exportDeclarations += `${fileName}, `;
    }

    writeFileSync(
        allToCompilePath,
        `${importDeclarations} \n export { ${exportDeclarations} }`,
    );
}
