import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: { remarkPlugins: ["remark-math"], rehypePlugins: ["rehype-katex"] },
})

export default withMDX(nextConfig)
