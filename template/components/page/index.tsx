import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Loading from "./loading";
import Error from "./error";

export interface {{COMPONENT_NAME}}Props {
  {{PROPS}}
}

export default function {{COMPONENT_NAME}}({ {{PROPS_DESTRUCTURE}} }: {{COMPONENT_NAME}}Props) {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<Loading />}>
        {{COMPONENT_BODY}}
      </Suspense>
    </ErrorBoundary>
  );
} 