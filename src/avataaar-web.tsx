import * as React from "react";
import { PixelRatio } from "react-native";
import { renderToString } from "react-dom/server";
import { Avatar as AvatarReact, AvataaarProps } from "avataaars";

export const AvatarDangerousWeb = React.memo((props: {avatar: AvataaarProps, size: number}) => {
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

  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
});