import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Derive __dirname equivalent in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

// The rest of your Next.js config
import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],  // Support MDX pages
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],  // Include MDX files in builds
    },
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow builds to proceed even if there are ESLint warnings/errors
  },
  webpack: (config) => {
    config.resolve.alias['@'] = `${__dirname}/src`; // Update alias with ESM-compatible path resolution
    config.cache = false; // Disables Webpack persistent caching to address caching-related errors

    return config;
  },
};

// MDX plugin configuration with GitHub-flavored Markdown and Prism syntax highlighting
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],  // GitHub-flavored Markdown support for MDX files
    rehypePlugins: [rehypePrism],  // Adds syntax highlighting with Prism.js
  },
});

export default withMDX(nextConfig);
