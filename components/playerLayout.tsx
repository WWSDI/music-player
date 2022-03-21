import { Box } from "@chakra-ui/layout"
import SideBar from "./sideBar"

export default function PlayerLayout({ children }) {
    return (
        <Box>
            Layout
            {children}
            <SideBar />
        </Box>
    )
}