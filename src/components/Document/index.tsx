import { useTranslation } from "next-i18next";
import RichText from "../RichText";

export default function Document({
  title = "",
  effectiveFrom = "",
  lastUpdated = "",
  data,
  textColor = "",
  titleClass = "",
}: Props) {
  const { t } = useTranslation("common");
  return (
    <div className={"document"}>
      {title && <div className={"document__title"}>{title}</div>}
      {title && effectiveFrom && lastUpdated && (
        <div className={"document__info"}>
          <div>{title}</div>
          <div>
            {t("effect_from")}: {effectiveFrom}
          </div>
          <div>
            {t("last_updated")}: {lastUpdated}
          </div>
        </div>
      )}
      {data.map((item, index) => {
        return (
          <div className={"document__block"} key={index}>
            <div className={`document__block--title ${titleClass}`}>{item.title}</div>
            <div
              className={textColor === "white" ? "document__block--description-white" : "document__block--description"}
            >
              <RichText text={item.description} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface Props {
  title?: string;
  effectiveFrom?: string;
  lastUpdated?: string;
  data: any[];
  textColor?: string;
  titleClass?: string;
}
