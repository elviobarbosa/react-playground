import { useEffect } from "react";
import { useTitle } from "../context/TitleContext";

export const usePageTitle = (
  newTitle: string,
  restoreOnUnmount: boolean = false
) => {
  const { title, setTitle } = useTitle();

  useEffect(() => {
    const prevTitle = title;
    setTitle(newTitle);
    document.title = newTitle;

    return () => {
      if (restoreOnUnmount) {
        setTitle(prevTitle);
        document.title = prevTitle;
      }
    };
  }, [newTitle, restoreOnUnmount, setTitle, title]);
};
