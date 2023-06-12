import Image from "next/image";
import { Locale } from "./index";

export function getLocaleIcon(locale: string) {
  switch (locale) {
    case Locale.ENGLISH.id:
      // @ts-ignore
      return <Image src={"/icons/en.svg"} alt={"en"} width={16} height={16} />;

    case Locale.CHINESE.id:
      // @ts-ignore
      return <Image src={"/icons/cn.svg"} alt={"en"} width={16} height={16} />;

    case Locale.KOREAN.id:
      // @ts-ignore
      return <Image src={"/icons/kr.svg"} alt={"en"} width={16} height={16} />;

    default:
      return null;
  }
}
