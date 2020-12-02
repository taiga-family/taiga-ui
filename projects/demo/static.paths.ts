import {getRoutes} from './src/modules/app/get-routes';

export const PRERENDERED_ROUTES: ReadonlyArray<string> = [
    ...getRoutes().map(route =>
        route.data && route.data.path ? route.data.path : route.path || '',
    ),
];
