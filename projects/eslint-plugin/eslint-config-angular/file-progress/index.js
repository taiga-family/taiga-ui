module.exports = {
    root: false,
    plugins: ['file-progress'],
    settings: {
        progress: {
            hide: false,
            successMessage: 'Lint done...',
        },
    },
    rules: {
        'file-progress/activate': 1,
    },
};
