import {assets} from '@demo/utils';

import {User} from './user';

export const databaseMockData: readonly User[] = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, assets`/images/avatar.jpg`),
];
