const themePlugin = require('postcss-theme');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
    plugins: [
        postcssCustomProperties({
            importFrom: [
                'src/themes/colors.json'
            ],
            exportTo: [
                'src/themes/colors.css'
            ],
            preserve: false
        }),
        postcssPresetEnv(),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-mixins'),
        themePlugin({ themePath: './src/themes'}),
        require('rucksack-css'),
        require('postcss-color-function'),
    ]
}