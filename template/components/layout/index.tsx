import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

import { getMetadata } from "./metadata";

export interface {{COMPONENT_NAME}}Props extends PropsWithChildren {
  {{PROPS}}
}

export const metadata: Metadata = getMetadata();

export default function {{COMPONENT_NAME}}({ children, {{PROPS_DESTRUCTURE}} }: {{COMPONENT_NAME}}Props) {
  return (
    <div className="min-h-screen">
      {{COMPONENT_BODY}}
      {children}
    </div>
  );
} 