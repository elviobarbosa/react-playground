import React from "react";
import NProgress from "nprogress";

export function lazyWithLoader(
  factory: () => Promise<{ default: React.ComponentType<unknown> }>
) {
  return React.lazy(() => {
    NProgress.start();
    return factory().finally(() => {
      NProgress.done();
    });
  });
}
