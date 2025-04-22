import { useEffect } from "react";
import { useIsFetching } from "@tanstack/react-query";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function LoadingQuery() {
  const isFetching = useIsFetching();

  useEffect(() => {
    if (isFetching > 0) {
      NProgress.start();
    } else {
      setTimeout(() => {
        NProgress.done();
      }, 300);
    }
  }, [isFetching]);

  return null;
}
