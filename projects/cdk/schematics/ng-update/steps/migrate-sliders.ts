import {Tree} from '@angular-devkit/schematics';
import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {
    addImportToNgModule,
    arrayFlat,
    ClassDeclaration,
    getClasses,
    getImports,
    Pattern,
    Query,
} from 'ng-morph';
import {StructureType} from 'ng-morph/utils/types/structure-type';
import {TemplateResource} from '../interfaces/template-resourse';
import {findAttributeOnElementWithTag} from '@angular/cdk/schematics';
import {addUniqueImport} from '../../utils/add-unique-import';

export function migrateSliders(tree: Tree): void {
    const fileSystem = new DevkitFileSystem(tree);
    const templateResources = getComponentTemplates('**/**');
    const filteredTemplates = templateResources.filter(templateRes =>
        hasPropsToBeReplacedByTextfieldController(
            templateRes,
            fileSystem,
            'tui-input-slider',
            'secondary',
        ),
    );

    const components = arrayFlat(
        filteredTemplates.map(templateRes => getNgComponents(templateRes.componentPath)),
    );
    const modulesWithComponentDeclaration = components
        .map(c => findNgModule(c))
        .filter(<T>(m: T | null): m is T => Boolean(m));

    for (const module of modulesWithComponentDeclaration) {
        addImportToNgModule(module, 'TuiTextfieldControllerModule', {unique: true});
        addUniqueImport(
            module.getSourceFile().getFilePath(),
            'TuiTextfieldControllerModule',
            '@taiga-ui/core',
        );
    }

    for (const template of filteredTemplates) {
        processTemplate(
            template,
            fileSystem,
            'secondary',
            'tuiTextfieldCustomContent',
            'tui-input-slider',
        );
        fileSystem.commitEdits();
    }
}

export function getNgModules(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('NgModule'),
    );
}

export function getNgComponents(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('Component'),
    );
}

export function findNgModule(component: ClassDeclaration): ClassDeclaration | null {
    const allNgModules = getNgModules('**/**');
    return (
        allNgModules.find(module => {
            const moduleFile = module.getSourceFile();
            const imports = getImports(moduleFile.getFilePath(), {
                namedImports: component.getName(),
            });

            return imports.some(
                i => i.getModuleSpecifierSourceFile() === component.getSourceFile(),
            );
        }) || null
    );
}

export function getTemplateFromTemplateResource(
    templateRes: TemplateResource,
    fileSystem: DevkitFileSystem,
): string {
    if ('template' in templateRes) {
        return templateRes.template;
    }

    const path = fileSystem.resolve(templateRes.templatePath);

    return fileSystem.read(path);
}

export function getPathFromTemplateResource(templateRes: TemplateResource): string {
    if ('templatePath' in templateRes) {
        return templateRes.templatePath;
    }

    return templateRes.componentPath;
}

export function getTemplateOffset(templateRes: TemplateResource): number {
    return 'offset' in templateRes ? templateRes.offset : 0;
}

function hasPropsToBeReplacedByTextfieldController(
    templateRes: TemplateResource,
    fileSystem: DevkitFileSystem,
    tagName: string,
    propName: string,
): boolean {
    const template = getTemplateFromTemplateResource(templateRes, fileSystem);

    return !![
        ...findAttributeOnElementWithTag(template, propName, [tagName]),
        ...findAttributeOnElementWithTag(template, `[${propName}]`, [tagName]),
    ].length;
}

function processTemplate(
    templateRes: TemplateResource,
    fileSystem: DevkitFileSystem,
    fromPropName: string,
    toPropName: string,
    tagName: string,
) {
    const template = getTemplateFromTemplateResource(templateRes, fileSystem);
    const path = fileSystem.resolve(getPathFromTemplateResource(templateRes));
    const recorder = fileSystem.edit(path);
    const templateOffset = getTemplateOffset(templateRes);

    findAttributeOnElementWithTag(template, fromPropName, [tagName]).forEach(offset => {
        recorder.remove(offset + templateOffset, fromPropName.length);
        recorder.insertRight(offset + templateOffset, toPropName);
    });

    findAttributeOnElementWithTag(template, `[${fromPropName}]`, [tagName]).forEach(
        offset => {
            recorder.remove(offset + templateOffset, `[${fromPropName}]`.length);
            recorder.insertRight(offset + templateOffset, `[${toPropName}]`);
        },
    );
}
