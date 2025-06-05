import clsx from "clsx"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import React, { HTMLProps, ReactNode } from "react"

export default function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

interface CustomHeadingProps extends HTMLProps<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

function CustomHeading({level, children, className, ...props}: CustomHeadingProps) {
  const slug = slugify(React.Children.toArray(children).join(''))
  return React.createElement(
    `h${level}`,
    {
      id: slug,
      className: clsx(
        "scroll-mt-36 md:scroll-mt-24 inline-flex",
        className,
      ),
      ...props
    },
    [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
    ],
    children,
  )
}

export const H1 = ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    {...props}
    className={clsx(props.className, "text-3xl font-bold normal-case tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50")}
    level={1}
  >
    {children}
  </CustomHeading>
)

export const H2 = ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    {...props}
    className={clsx(props.className, "mb-4 text-lg font-semibold normal-case tracking-tight text-gray-900 dark:text-gray-50")}
    level={2}
  >
    {children}
  </CustomHeading>
)

export const H3 = ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading
    {...props}
    className={clsx(props.className, "mb-2 font-semibold normal-case tracking-tight text-gray-900 dark:text-gray-50")}
    level={3}
  >
    {children}
  </CustomHeading>
)

export const P = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p {...props} className="mb-8 leading-7 text-gray-600 dark:text-gray-400" />
)

export const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className="mb-10 ml-[30px] list-['–__'] space-y-1 leading-8 text-gray-600 dark:text-gray-400"
    {...props}
  />
)

export const Bold = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className="font-semibold text-gray-900 dark:text-gray-50" {...props} />
)

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  const style =
    "text-indigo-600 font-medium hover:text-indigo-500 dark:text-indigo-500 hover:dark:text-indigo-400"
  if (href.startsWith("/")) {
    return (
      <Link className={style} href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a href={href} {...props} className={style} />
  }

  return (
    <a href={href} className={style} target="_blank" rel="noopener noreferrer" {...props} />
  )
}

export const PostLayout = ({
  date,
  children,
}: {
  date: string;
  children: ReactNode;
}) => (
  <div className="my-12 py-8 border-b border-gray-200 dark:border-gray-800 md:flex md:flex-row md:gap-x-8">
    {date && (
      <div className="md:w-1/4 mb-4 md:mb-0 md:sticky md:top-24 self-start">
        <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    )}
    <div className={date ? "md:w-3/4" : "w-full"}>{children}</div>
  </div>
);

interface BlogImageProps extends ImageProps {
  priority?: boolean;
}

export const BlogImage = ({
  alt,
  width = 1200,
  height = 675,
  src,
  className,
  priority,
  sizes,
  ...props
}: BlogImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    sizes={sizes || "(max-width: 768px) 100vw, 768px"}
    className={clsx(
      "mb-10 rounded-xl shadow-md shadow-black/15 ring-1 ring-gray-200/50 dark:ring-gray-800",
      className
    )}
    {...props}
  />
)
