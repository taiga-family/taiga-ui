import type {TemplateResource} from '../../ng-update/interfaces/template-resourse';
import type {DevkitFileSystem} from 'ng-morph';

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
