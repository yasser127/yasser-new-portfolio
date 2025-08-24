import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {
  color: string;
}

export const Cursor: FC<CursorProps> = ({ color }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={["a", "button", "h1", "h2", "h3", "h4", "h5", "h6"]}
    />
  );
};
