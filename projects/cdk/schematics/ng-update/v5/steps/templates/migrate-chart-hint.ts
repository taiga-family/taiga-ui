import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {getTemplateFromTemplateResource} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

const CHART_TAGS = ['tui-bar-chart', 'tui-line-chart', 'tui-pie-chart'];
const HINT_ATTRIBUTES = ['tuiHintContent', '[tuiHintContent]'];

export function migrateChartHint({
    resource,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);

    const elements = findElementsWithAttributeOnTag(
        template,
        HINT_ATTRIBUTES,
        CHART_TAGS,
    );

    if (!elements.length) {
        return;
    }

    addImportToClosestModule(
        resource.componentPath,
        'TuiChartHint',
        '@taiga-ui/addon-charts',
    );
}
