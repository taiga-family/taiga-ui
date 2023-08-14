module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['html'],
            settings: {
                'html/indent': '+4',
                'html/report-bad-indent': 'error',
            },
        },
    ],
};
