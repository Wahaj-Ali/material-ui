import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

function App() {

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor: "lightblue"
        },
        "&:disabled": {
          backgroundColor: "grey",
          color: "white"
        },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="primary" startIcon={<SettingsIcon />}>Settings</Button>
      <Button variant="contained" color="secondary" startIcon={<AddIcon />}>Add new post</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">
        h1 Heading
      </Typography>;
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
