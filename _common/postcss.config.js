module.exports = (ctx) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    ...(ctx.env === 'production' ? [require('cssnano')({autoprefixer: false})] : [])
  ]
});
