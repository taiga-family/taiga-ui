import {readdirSync, writeFileSync} from 'node:fs';

export function tuiPrepareAllToCompileFile(iconsSrc: string, entryPointTs: string): void {
    const icons: string[] = readdirSync(iconsSrc).filter(file => file.endsWith('.svg'));

    console.info(
        '\x1B[36m%s\x1B[0m',
        `Combine all svg icons into one file for bundling: ${icons.length}`,
    );

    let importDeclarations = '';
    let exportDeclarations = '';

    icons.forEach(iconPath => {
        const fileName = iconPath.split('.').shift();
        const filePath = `./src/${fileName}.svg`;

        importDeclarations += `import ${fileName} from '${filePath}';\n`;
        exportDeclarations += `${fileName}, `;
    });

    writeFileSync(
        entryPointTs,
        `${importDeclarations} \n export { ${exportDeclarations} }`,
    );
}
