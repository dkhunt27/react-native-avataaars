import * as React from "react";
import { SvgXml} from "react-native-svg";

import "./globals.js"; // https://github.com/facebook/hermes/issues/948#issuecomment-1484240071
import { PixelRatio } from "react-native";
import { renderToString } from "react-dom/server";
import { Avatar as AvatarReact, AvataaarProps } from "avataaars";

export const Avatar = React.memo((props: AvataaarProps & {size: number}) => {
  const { size } = props;

  const avatar = React.useMemo(
    () => (
      <AvatarReact
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size),
        }}
        {...props}
      />
    ),
    [props]
  );

  const svgString = renderToString(avatar);

  return <SvgXml xml={svgString} width={"100%"} height={"100%"} />;
});