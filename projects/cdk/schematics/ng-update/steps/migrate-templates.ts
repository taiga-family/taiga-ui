import {getComponentTemplates} from '../../utils/get-component-templates';
import {Tree} from '@angular-devkit/schematics';
import {ATTRS_TO_REPLACE} from '../constants/attributes';
import {
    findAttributeOnElementWithTag,
    findElementsWithAttribute,
    getStartOffsetOfAttribute,
} from '@angular/cdk/schematics';

export function migrateTemplates(tree: Tree) {
    const templateUrls = getComponentTemplates('**/**');

    templateUrls.forEach(url => {
        processTemplateUrl(url, tree);
    });
}

function processTemplateUrl(filePath: string, tree: Tree) {
    ATTRS_TO_REPLACE.forEach(({from, to}) => {
        const template = tree.read(filePath)?.toString() || '';
        const elements = from.tagNames
            ? findAttributeOnElementWithTag(template, from.attrName, from.tagNames || [])
            : findElementsWithAttribute(template, from.attrName);

        elements.forEach(element => {
            const offset = getStartOffsetOfAttribute(element, from.attrName);

            const recorder = tree.beginUpdate(filePath);

            recorder.remove(offset, from.attrName.length);
            recorder.insertRight(offset, to.attrName);

            tree.commitUpdate(recorder);
        });
    });
}
