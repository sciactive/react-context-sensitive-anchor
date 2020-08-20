import React, { useContext } from "react";

import { AnchorCtx } from "./context.js";

function ContextSensitiveAnchor(props) {
  const { nested = false } = useContext(AnchorCtx);
  const {
    component: Component = "a",
    alt: Alt = "span",
    altProps,
    primaryProps,
    children = null,
    ...componentProps
  } = props;

  if (nested) {
    const {
      href,
      hreflang,
      ping,
      rel,
      target,
      type,
      ...altComponentProps
    } = componentProps;
    return <Alt {...altComponentProps} {...altProps}>{children}</Alt>;
  } else {
    return (
      <AnchorCtx.Provider value={{ nested: true }}>
        <Component {...componentProps} {...primaryProps}>{children}</Component>
      </AnchorCtx.Provider>
    );
  }
}

export default ContextSensitiveAnchor;
