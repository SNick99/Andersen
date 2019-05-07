import React from "react";

const PanelHeader = props => {
  const { onShowPanel, children } = props;
  return <button onClick={onShowPanel}>{children}</button>;
};

export default PanelHeader;
