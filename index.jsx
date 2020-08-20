import React, { useContext } from "react";

import { AnchorCtx } from "./context.js";

function ContextSensitiveAnchor(props) {
  const { withinAnchor = false } = useContext(AnchorCtx);
  const {
    alt: Alt = "span",
    altProps,
    anchorProps,
    children = null,
    ...componentProps
  } = props;

  if (withinAnchor) {
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
      <AnchorCtx.Provider value={{ withinAnchor: true }}>
        <a {...componentProps} {...anchorProps}>{children}</a>
      </AnchorCtx.Provider>
    );
  }
}

export default ContextSensitiveAnchor;
