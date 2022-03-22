import { Box, List, ListIcon, ListItem } from "@chakra-ui/layout";
import NextImage from "next/image";
import { MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/"
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search"
  },
  {
    name: "My Library",
    icon: MdLibraryMusic,
    route:"/library"
  },
];

export default function SideBar() {
  return (
    <Box bg="black" color="white" width="100%" height="100%" padding="1rem">
      <Box>
        {/* All static files are stored in public folder, so that when you use "/" as base URL to refer to any files in the public folder */}
        <NextImage src="/logo.svg" width={100} height={50} />
      </Box>
      <List spacing={3}>
        {navMenu.map((item) => (
          <ListItem>
            <ListIcon as={item.icon} color='white.100'/>
            {item.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
