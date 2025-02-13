import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export function buildResolvers({ src: srcPath }: Pick<BuildPaths, 'src'>): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [srcPath, 'node_modules'],
    preferAbsolute: true,
    // mainFields: ['main'],
    alias: {
      // '@': path.resolve(__dirname, srcPath),
    },
  };
}
