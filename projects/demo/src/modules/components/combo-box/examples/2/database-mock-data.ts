import {User} from './user';

export const databaseMockData: readonly User[] = [
    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User(
        'Alex',
        'Inkin',
        new URL('../../../../../assets/images/avatar.jpg', import.meta.url).toString(),
    ),
];
