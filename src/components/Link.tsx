import { default as NextLink } from "next/link";

export default function Link(prop: any) {
  const { href, locale = "en", ...props } = prop;

  return (
    <NextLink href={href} passHref prefetch={false} locale={locale}>
      <a {...props} />
    </NextLink>
  );

  // return href && !external ? (
  //   <NextLink href={href} passHref prefetch={false} locale={locale}>
  //     <a {...props} />
  //   </NextLink>
  // ) : (
  //   <a
  //     {...props}
  //     {...(external
  //       ? {
  //           href,
  //           rel: "noreferrer",
  //           target: "_self",
  //         }
  //       : {})}
  //   />
  // );
}

// interface Props{
// 	href: string,
// 	locale?: string,
// 	external?: boolean,
// 	props: any
// }
