import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';

import {User} from './user';

export const databaseMockData: readonly User[] = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, avatar),
];
