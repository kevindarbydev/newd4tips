import * as React from "react";
import { WebsiteData } from "../../config";
import { SeoData } from "./types";

const GeneralTags = (
  seoData: SeoData,
  websiteData: WebsiteData
): React.ReactElement[] => {
  const { title, imageUrl } = seoData;
  const { logoUrl } = websiteData;

  const tags = [
    <title key="gen-title">{title}</title>,
    <link rel="shortcut icon" href={logoUrl} key="gen-fav" />,
  ];

  tags.push(
    <meta
      name="description"
      content="Tips & Tricks to excel in Diablo 4"
      key="gen-desc"
    />
  );

  if (imageUrl)
    tags.push(<meta name="image" content={imageUrl} key="gen-image" />);

  return tags;
};

export default GeneralTags;
