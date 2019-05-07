import React from "react";

const PanelBody = props => {
  const { showPanel, children } = props;
  return showPanel ? <div>{children}</div> : null;
};

export default PanelBody;
