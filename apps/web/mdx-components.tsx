import type { MDXComponents } from "mdx/types"

import {
  Bold,
  PostLayout,
  CustomLink,
  H1,
  H2,
  H3,
  P,
  Ul,
  BlogImage,
} from "@/components/mdx"

export const customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  Bold: Bold,
  ul: Ul,
  a: CustomLink,
  PostLayout: PostLayout,
  BlogImage: BlogImage,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}
