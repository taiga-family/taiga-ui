import * as path from 'path';

export function getLibsList(): string {
    const pathToAngularJson: string = path.join(
        process.cwd(),
        process.env.ANGULAR_JSON_PATH || 'angular.json',
    );

    const config: typeof import('./../../angular.json') = require(pathToAngularJson);

    return Object.entries(config.projects)
        .filter(([, value]) => value.projectType === 'library')
        .map(([key]) => key)
        .join(',');
}
