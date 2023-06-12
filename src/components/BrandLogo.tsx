import Link from "./Link";
import Links from "../constants/links";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

export default function BrandLogo({ onClick = () => {}, style = {}, className = "" }: Props) {
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  const getLogoByTheme = () => {
    switch (theme) {
      case "light": {
        return "/images/logo.png";
      }

      case "dark": {
        return "/images/logo.png";
      }

      default: {
        return "/images/logo.png";
      }
    }
  };

  return (
    <Link
      href={Links.landingPage}
      onClick={onClick}
      className={`brand-logo d-flex ${className}`}
      style={style}
      locale={i18n.language}
    >
      <Image src={getLogoByTheme()} width={177} height={23} alt={"sample logo"} />
    </Link>
  );
}

interface Props {
  onClick?: () => void;
  style?: any;
  className?: string;
  less?: boolean;
}
