import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar, styled } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap: "20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display:"flex"
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap: "10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display:"none"
  }
}));

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Wahaj Ali</Typography>
        <HandshakeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}}/>
        </Icons>
        <UserBox >
        <Avatar sx={{width:30, height:30}}/>
        <Typography variant='span'>User</Typography>
        </UserBox>
      </StyleToolbar>
    </AppBar>
  )
}
