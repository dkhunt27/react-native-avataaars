// resolves Property 'TextEncoder' does not exist in iOS
import "fast-text-encoding";

import * as React from "react";
import { renderToString } from "react-dom/server";
import { Piece as PieceReact, PieceProps } from "avataaars";

export const PieceDangerousWeb = React.memo((props: PieceProps) => {
  const avatar = React.useMemo(() => ( <PieceReact {...props} /> ), [props]);

  const svgString = renderToString(avatar);

  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
});