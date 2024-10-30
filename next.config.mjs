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
    // Allow builds to proceed even if there are ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],  // Add GitHub-flavored Markdown support
    rehypePlugins: [rehypePrism],  // Enable Prism.js syntax highlighting
  },
});

export default withMDX(nextConfig);
