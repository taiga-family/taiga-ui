import fs from 'node:fs/promises';
import path from 'node:path';

import ts from 'typescript';

import {fileExists} from './file-system';

/**
 * Every name importable from the package `@taiga-ui/<name>` whose sources live in
 * `packageDir`. Follows `export * from` / `export {…} from` chains through relative paths
 * and the package's own secondary entry points (`@taiga-ui/kit/components`); other packages
 * are not followed. Names starting with `_` are internal and left out.
 */
export async function collectPublicExports(packageDir: string): Promise<Set<string>> {
    const exports = new Set<string>();
    const index = await resolveModule(packageDir);

    if (index) {
        await collectFromFile(index, packageDir, exports, new Set());
    }

    return new Set([...exports].filter((name) => !/^[_ɵ]/.test(name)));
}

async function collectFromFile(
    file: string,
    packageDir: string,
    exports: Set<string>,
    visited: Set<string>,
): Promise<void> {
    if (visited.has(file)) {
        return;
    }

    visited.add(file);

    const source = ts.createSourceFile(
        file,
        await fs.readFile(file, 'utf-8'),
        ts.ScriptTarget.Latest,
    );

    for (const statement of source.statements) {
        if (ts.isExportDeclaration(statement)) {
            await collectFromExportDeclaration(
                statement,
                file,
                packageDir,
                exports,
                visited,
            );
        } else if (hasExportModifier(statement)) {
            declaredNames(statement).forEach((name) => exports.add(name));
        }
    }
}

async function collectFromExportDeclaration(
    statement: ts.ExportDeclaration,
    file: string,
    packageDir: string,
    exports: Set<string>,
    visited: Set<string>,
): Promise<void> {
    const {exportClause, moduleSpecifier} = statement;

    if (exportClause && ts.isNamedExports(exportClause)) {
        exportClause.elements.forEach(({name}) => exports.add(name.text));

        return;
    }

    if (exportClause) {
        exports.add(exportClause.name.text);

        return;
    }

    if (!moduleSpecifier || !ts.isStringLiteral(moduleSpecifier)) {
        return;
    }

    const modulePath = resolveSpecifier(moduleSpecifier.text, file, packageDir);
    const target = modulePath && (await resolveModule(modulePath));

    if (target) {
        await collectFromFile(target, packageDir, exports, visited);
    }
}

/** Relative paths and `@taiga-ui/<this package>/…`; anything else belongs to another package. */
function resolveSpecifier(
    specifier: string,
    file: string,
    packageDir: string,
): string | null {
    if (specifier.startsWith('.')) {
        return path.resolve(path.dirname(file), specifier);
    }

    const ownPrefix = `@taiga-ui/${path.basename(packageDir)}/`;

    return specifier.startsWith(ownPrefix)
        ? path.join(packageDir, specifier.slice(ownPrefix.length))
        : null;
}

function hasExportModifier(statement: ts.Statement): boolean {
    return (
        ts.canHaveModifiers(statement) &&
        !!ts
            .getModifiers(statement)
            ?.some(({kind}) => kind === ts.SyntaxKind.ExportKeyword)
    );
}

function declaredNames(statement: ts.Statement): string[] {
    if (ts.isVariableStatement(statement)) {
        return statement.declarationList.declarations
            .map(({name}) => name)
            .filter(ts.isIdentifier)
            .map(({text}) => text);
    }

    if (
        ts.isClassDeclaration(statement) ||
        ts.isFunctionDeclaration(statement) ||
        ts.isInterfaceDeclaration(statement) ||
        ts.isTypeAliasDeclaration(statement) ||
        ts.isEnumDeclaration(statement)
    ) {
        return statement.name ? [statement.name.text] : [];
    }

    return [];
}

async function resolveModule(modulePath: string): Promise<string | null> {
    const candidates = modulePath.endsWith('.ts')
        ? [modulePath]
        : [`${modulePath}.ts`, path.join(modulePath, 'index.ts')];

    for (const candidate of candidates) {
        if (await fileExists(candidate)) {
            return candidate;
        }
    }

    return null;
}
