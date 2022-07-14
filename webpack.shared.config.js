module.exports = () => {
  return {
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          use: ['babel-loader'],
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },

  }
}