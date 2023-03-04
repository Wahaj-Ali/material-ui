import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";

function App() {

  // const BlueButton = styled(Button)({
  //   backgroundColor: "skyblue",
  //       color:"#888",
  //       margin:5,
  //       "&:hover":{
  //         backgroundColor: "lightblue"
  //       },
  //       "&:disabled": {
  //         backgroundColor: "grey",
  //         color: "white"
  //       },
  // });
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
