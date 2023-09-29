import * as React from "react";
import { SvgXml} from "react-native-svg";

import "./globals.js"; // https://github.com/facebook/hermes/issues/948#issuecomment-1484240071
import { renderToString } from "react-dom/server";
import { Piece as PieceReact, PieceProps } from "avataaars";

export const PieceDangerousWeb = React.memo((props: PieceProps) => {
  const avatar = React.useMemo(() => ( <PieceReact {...props} /> ), [props]);

  const svgString = renderToString(avatar);

  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
});