const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

module.exports = withImages(
  withCSS({
    webpack(config, { isServer }) {
      if (!isServer) {
        // Add the canvasjs module to the webpack configuration
        config.resolve.alias['canvasjs-react-charts'] = 'canvasjs/dist/canvasjs.react';
      }
      // Add the necessary loaders for the canvasjs-react-charts package
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/',
              outputPath: 'static/',
            },
          },
        ],
      });

      return config;
    },
    env: {
      // Set environment variables here
    },
  }),
);
