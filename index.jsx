import React, { useContext } from "react";

import { AnchorCtx } from "./context.js";

function ContextSensitiveAnchor(props) {
  const { nested = false } = useContext(AnchorCtx);
  const {
    component: Component = "a",
    alt: Alt = "span",
    altProps = {},
    primaryProps = {},
    emulateLink = false,
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
    const emulation = {};

    if (emulateLink && href) {
      emulation.onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        let openTarget = target || "_self";
        const mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

        if (
          (mac && e.metaKey) ||
          (!mac && e.ctrlKey) ||
          e.which == 2 ||
          e.button == 4
        ) {
          openTarget = "_blank";
        }

        window.open(href, openTarget);
      };
    }

    return (
      <Alt {...altComponentProps} {...altProps} {...emulation}>
        {children}
      </Alt>
    );
  } else {
    return (
      <AnchorCtx.Provider value={{ nested: true }}>
        <Component {...componentProps} {...primaryProps}>
          {children}
        </Component>
      </AnchorCtx.Provider>
    );
  }
}

export default ContextSensitiveAnchor;
