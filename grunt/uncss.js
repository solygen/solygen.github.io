module.exports = {
      dist: {
        files: {
            'main.css': ['src/index.html'],

        },
        options: {
            ignore: [
                '.animated',
                '.tada',
                '.activate'
            ]
        }
    }
};
