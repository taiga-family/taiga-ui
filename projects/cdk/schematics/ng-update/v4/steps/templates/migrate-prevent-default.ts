import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type TemplateResource} from '@taiga-ui/cdk/schematics/ng-update/interfaces';
import {findElementsWithAttribute} from '@taiga-ui/cdk/schematics/utils/templates/elements';
import {findAttr} from '@taiga-ui/cdk/schematics/utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '@taiga-ui/cdk/schematics/utils/templates/template-resource';
import {type DevkitFileSystem} from 'ng-morph';

export function migratePreventDefault({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsWithAttribute(template, 'tuiPreventDefault');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const preventDefaultAttr = findAttr(attrs, 'tuipreventdefault');

        if (!preventDefaultAttr) {
            return;
        }

        const event = preventDefaultAttr.value;

        const preventDefaultStart =
            sourceCodeLocation?.attrs?.[preventDefaultAttr.name].startOffset || 0;
        const preventDefaultEnd =
            sourceCodeLocation?.attrs?.[preventDefaultAttr.name].endOffset || 0;

        recorder.insertRight(
            templateOffset + preventDefaultStart,
            `(${event}.prevent.silent)="0"`,
        );

        recorder.remove(
            templateOffset + preventDefaultStart,
            preventDefaultEnd - preventDefaultStart,
        );
    });
}
