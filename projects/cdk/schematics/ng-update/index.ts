import {SchematicContext} from '@angular-devkit/schematics';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';

export function updateToV3(_: Schema) {
    return async (_, context: SchematicContext) => {
        context.logger.info(`taiga packages will be updated to ${TAIGA_VERSION}`);
    };
}
