import { useEffect } from "react";
import TagManager from "react-gtm-module";

export const GTManager = ({
  children,
  GTM_ID,
}: {
  children: React.ReactNode;
  GTM_ID: string;
}) => {
  useEffect(() => {
    if (GTM_ID) TagManager.initialize({ gtmId: GTM_ID });
  });
  return children;
};
