import { Box } from "@chakra-ui/layout";
import SideBar from "./sideBar";

export default function PlayerLayout({ children }) {
  const sideBarWidth = "15rem";
  const playerHeight = "5rem";
  return (
    <Box width="100vw" height="100vh" border="1px solid lightgray">
      <Box
        id="sideBarContainer"
        position="absolute"
        top="0"
        left="0"
        width={sideBarWidth}
        border="1px solid yellow"
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
        border="1px solid blue"
      >
        Player
      </Box>
    </Box>
  );
}
