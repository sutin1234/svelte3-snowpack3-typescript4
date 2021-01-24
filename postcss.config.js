const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postimport = require("postcss-import");

const plugins = process.env.NODE_ENV === 'production' ? [tailwind, autoprefixer, cssnano, postimport] : [tailwind, autoprefixer, postimport];

module.exports = { plugins };
