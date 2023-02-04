import styles from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const HandleLogout = () => {
    logout();
    navigate("/signup");
  };
  console.log(`Navbar user: ${user}`);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component="button" to="/" className={styles.link}>
              Monet Spend App
            </Link>
          </Typography>
          {!user && (
            <>
              <Button color="inherit" variant="outlined">
                <Link component="button" to="/login" className={styles.link}>
                  Login
                </Link>
              </Button>
              <Button color="secondary" variant="text">
                <Link component="button" to="/signup" className={styles.link}>
                  Signup
                </Link>
              </Button>
            </>
          )}
          {user && (
            <>
            <Typography variant="caption" component="div" >
              Merhaba {user.displayName}
              </Typography>
              <Button
                sx={{ ml: 5 }}
                color="secondary"
                variant="contained"
                onClick={HandleLogout}
              >
                Log out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
