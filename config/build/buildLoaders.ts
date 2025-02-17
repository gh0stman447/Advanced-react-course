import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: Pick<BuildOptions, 'isDev'>): webpack.RuleSetRule[] {
  // Если не используем тайпскрипт - нужен babel-loader (перегоняет новый стандарт js в старый, чтобы поддерживалось всеми браузерами)
  // Если используем (как сейчас), то ts-loader уже умеет обрабатывать tsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff|)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // 'style-loader',
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      // Translates CSS into CommonJS
      // 'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
