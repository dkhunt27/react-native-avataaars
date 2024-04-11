// resolves Property 'TextEncoder' does not exist in iOS
import "fast-text-encoding";

import * as React from "react";
import { SvgXml} from "react-native-svg";
import { PixelRatio } from "react-native";
import { renderToString } from "react-dom/server";
import { Avatar as AvatarReact, AvataaarProps } from "avataaars";

export const Avatar = React.memo((props: {avatar: AvataaarProps, size: number}) => {
  const { avatar, size } = props;

  const avatarReact = React.useMemo(
    () => (
      <AvatarReact
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size),
        }}
        {...avatar}
      />
    ),
    [avatar]
  );

  const svgString = renderToString(avatarReact);

  return <SvgXml xml={svgString} width={"100%"} height={"100%"} />;
});