const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.tsx', 'public/js')
    .react()
    .webpackConfig({
        output: {
            path: path.resolve(__dirname, 'public/js'),
            filename: '[name].js'
        },
        resolve: {
           extensions: ['.js', '.jsx', '.ts', '.tsx'],
           alias: {
              '@': path.resolve(__dirname, 'resources/js'),
              'components': path.resolve(__dirname, 'resources/js/components'),
           },
        },
        module: {
            rules: [
               {
                  test: /\.tsx?$/,
                  exclude: /node_modules/,
                  loader: 'ts-loader',
                  options: {
                     transpileOnly: true
                  }
               }
            ]
         }
     })
    .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
    mix.version();
}
