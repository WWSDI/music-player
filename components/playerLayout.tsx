import { Box } from "@chakra-ui/layout";
import { calc } from "@chakra-ui/react";
import SideBar from "./sideBar";

export default function PlayerLayout({ children }) {
  const sideBarWidth = "15rem";
  const playerHeight = "5rem";
  return (
    // In terms of layout, my approach here may be less orthodox - in stead of putting the sizing values (namely sideBarWidth, playerHeight etc.) inside of each made-from-scratch component, I extract them and let them sit in the PlayerLayout component layer so that the control is centralised. If these components are to be reused in future, default sizing values should be put inside of the components for better encapsulation.
    <Box width="100vw" height="100vh" border="1px solid lightgray">
      <Box
        id="sideBarContainer"
        position="absolute"
        top="0"
        left="0"
        width={sideBarWidth}
        height={`calc(100vh - ${playerHeight})`}
        // border="1px solid yellow"
      >
        <SideBar />
      </Box>
      <Box
        id="mainPageContainer"
        marginLeft={sideBarWidth}
        marginBottom={playerHeight}
      >
        {children}
      </Box>
      <Box
        id="playerContainer"
        // when use position, define anchor point (i.e. top, left etc.) so that the positioning won't change due to other components such as, specifically here, the mainPageContainer component
        position="absolute"
        left="0"
        bottom="0"
        width="100vw"
        height={playerHeight}
        bg="gray.700"
        border="1px solid blue"
      >
        Player
      </Box>
    </Box>
  );
}
