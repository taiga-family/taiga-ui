module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'sort-class-members'],
            rules: {
                /**
                 * @note(splincode): use @typescript-eslint/member-ordering instead
                 */
                'sort-class-members/sort-class-members': 'off',
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            'signature',
                            /**
                             * static fields
                             * [sort: public -> protected -> private]
                             **/
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',

                            /**
                             * abstract fields
                             * [sort: public -> protected -> private]
                             **/
                            'public-abstract-field',
                            'protected-abstract-field',

                            /**
                             * instance fields
                             * [sort: private -> protected -> public]
                             * [sort: decorated -> non-decorated]
                             **/
                            'private-decorated-field',
                            'private-instance-field',
                            'protected-decorated-field',
                            'protected-instance-field',
                            'public-decorated-field',
                            'public-instance-field',

                            /**
                             * constructors
                             * [sort: public -> protected -> private]
                             **/
                            'public-constructor',
                            'protected-constructor',
                            'private-constructor',

                            /**
                             * @note(splincode):
                             * We have deliberately disabled this rule
                             * because it can break a lot of the codebase.
                             *
                             * static accessors
                             * [sort: public -> protected -> private]
                             **/
                            /*
                             * 'public-static-get',
                             * 'public-static-set',
                             * 'protected-static-get',
                             * 'protected-static-set',
                             * 'private-static-get',
                             * 'private-static-set',
                             */

                            /**
                             * @note(splincode):
                             * We have deliberately disabled this rule
                             * because it can break a lot of the codebase.
                             *
                             * instance accessors
                             * [sort: public -> protected -> private]
                             * [sort: decorated -> non-decorated]
                             **/
                            /*
                             * 'public-decorated-get',
                             * 'public-instance-get',
                             * 'public-decorated-set',
                             * 'public-instance-set',
                             * 'protected-decorated-get',
                             * 'protected-instance-get',
                             * 'protected-decorated-set',
                             * 'protected-instance-set',
                             * 'private-decorated-get',
                             * 'private-instance-get',
                             * 'private-decorated-set',
                             * 'private-instance-set',
                             */

                            /**
                             * static methods
                             * [sort: public -> protected -> private]
                             **/
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',

                            /**
                             * abstract
                             * [sort: public -> private -> protected]
                             **/
                            'public-abstract-get',
                            'public-abstract-set',
                            'protected-abstract-get',
                            'protected-abstract-set',
                            'public-abstract-method',
                            'protected-abstract-method',

                            /**
                             * methods
                             * [sort: public -> protected -> private]
                             * [sort: decorated -> non-decorated]
                             **/
                            'public-decorated-method',
                            'public-instance-method',
                            'protected-decorated-method',
                            'protected-instance-method',
                            'private-decorated-method',
                            'private-instance-method',
                        ],
                    },
                ],
            },
        },
    ],
};
