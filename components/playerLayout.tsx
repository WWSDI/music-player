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
        height={`calc(100% - ${playerHeight})`}
        width={sideBarWidth}
        border="1px solid yellow"
      >
        <SideBar />
      </Box>
      <Box
        id="mainPageContainer"
        marginLeft={sideBarWidth}
        width={`calc(100% - ${sideBarWidth})`}
      >
        {children}
      </Box>
      <Box
        id="playerContainer"
        position="absolute"
        left="0"
        bottom="0"
        height={playerHeight}
        width="100vw"
        border="1px solid blue"
      >
        Player
      </Box>
    </Box>
  );
}
