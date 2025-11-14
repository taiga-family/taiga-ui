import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type Attribute} from 'parse5/dist/common/token';

import {findAttr} from '../../../../utils/templates/inputs';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates/replace-tag';
import {removeAttrs} from '../../../v4/steps/utils/remove-attrs';

export function migrateAvatarToDirective({
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
    const avatarElements = findElementsByTagName(template, 'tui-avatar');

    avatarElements.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        if (!sourceCodeLocation?.startTag) {
            return;
        }

        const srcAttr = getSrcAttr(element.attrs);
        const hasAvatarAttr = hasTuiAvatarAttr(element.attrs);
        const attrToAdd = hasAvatarAttr ? null : getAvatarAttr(srcAttr);

        replaceTag(recorder, sourceCodeLocation, 'tui-avatar', 'span', templateOffset, [
            ...(attrToAdd ? [attrToAdd] : []),
        ]);

        if (srcAttr) {
            removeAttrs([srcAttr], sourceCodeLocation, recorder, templateOffset);
        }
    });
}

function hasTuiAvatarAttr(attrs: Attribute[]): boolean {
    return attrs.some(({name}) =>
        ['tuiavatar', '[tuiavatar]', '[(tuiavatar)]', 'bind-tuiavatar'].includes(name),
    );
}

function getSrcAttr(attrs: Attribute[]): Attribute | undefined {
    return (
        findAttr(attrs, 'src') ??
        attrs.find(({name}) => name === 'bind-src' || name === '[(src)]')
    );
}

function getAvatarAttr(attr?: Attribute): string {
    if (!attr) {
        return 'tuiAvatar';
    }

    if (attr.name === 'src') {
        return attr.value ? `tuiAvatar="${attr.value}"` : 'tuiAvatar';
    }

    if (attr.name === '[src]' || attr.name === 'bind-src') {
        return attr.value ? `[tuiAvatar]="${attr.value}"` : '[tuiAvatar]';
    }

    if (attr.name === '[(src)]') {
        return attr.value ? `[(tuiAvatar)]="${attr.value}"` : '[(tuiAvatar)]';
    }

    return 'tuiAvatar';
}
