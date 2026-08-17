import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {getTemplateFromTemplateResource} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

const LEGACY_DROPDOWN_HOSTS = [
    'tui-input-tag',
    'tui-select',
    'tui-combo-box',
    'tui-multi-select',
    'tui-input',
] as const;

function isDropdownAttrName(name: string): boolean {
    const stripped = name.toLowerCase().replaceAll(/[[\]()*]/g, '');

    return (
        stripped.startsWith('TuiDropdown'.toLowerCase()) ||
        stripped === 'TuiDataList'.toLowerCase()
    );
}

function usesDropdown(element: Element): boolean {
    const stack: ChildNode[] = [element];

    while (stack.length > 0) {
        const node = stack.pop();
        const attrs = (node as Element | undefined)?.attrs;

        if (attrs?.some((attr) => isDropdownAttrName(attr.name))) {
            return true;
        }

        const childNodes = (node as Element | undefined)?.childNodes;

        if (childNodes) {
            stack.push(...childNodes);
        }
    }

    return false;
}

export function migrateDropdownImport({
    resource,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const {componentPath} = resource;

    if (!componentPath) {
        return;
    }

    const template = getTemplateFromTemplateResource(resource, fileSystem);

    const hasDropdown = LEGACY_DROPDOWN_HOSTS.some((tag) =>
        findElementsByTagName(template, tag).some(usesDropdown),
    );

    if (hasDropdown) {
        addImportToClosestModule(componentPath, 'TuiDropdown', '@taiga-ui/core');
    }
}
