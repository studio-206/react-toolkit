import { CSS, styled } from "@stitches/react";

interface ScrimProps {
  isActive: boolean;
  css?: CSS;
}

const Scrim = ({ isActive, css }: ScrimProps) => {
  return <Wrap isActive={isActive} css={css}></Wrap>;
};

const Wrap = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0,0,0,0.4)",
  opacity: 0,
  transition: "300ms opacity",

  variants: {
    isActive: {
      true: {
        opacity: 1,
      },
    },
  },
});

export default Scrim;
