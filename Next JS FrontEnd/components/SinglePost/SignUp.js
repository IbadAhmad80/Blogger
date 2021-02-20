import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Cookie from "js-cookie";
import axios from "axios";
import { server } from "../../config/index";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions";

export default function SignUp({ isAccount }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    username: "",
    email: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSignUp = () => {
    setOpen(false);
  };

  const authenticateUser = async () => {
    //code won't run on server side
    if (typeof window === "undefined") {
      return;
    }
    let res;
    try {
      res = await axios.post(`${server}/auth/local/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      Cookie.set("token", res.data.jwt);
      setFormData({ password: "", username: "", email: "" });
      isAccount && isAccount(res.data.user.role.name);
      //   console.log(Cookie.get("token"));
      dispatch(signIn(res.data.jwt));
      handleCloseSignUp();
    } catch (err) {
      // alert(res.message.messages[0].message);
      console.log("error in sign up section :", res);
      alert(err);
    }
  };
  return (
    <div>
      <div>
        <h5>
          To comment , you must have an account first. If not,{" "}
          <span onClick={handleClickOpen}>create a new one now.</span>
        </h5>
        <Dialog
          open={open}
          onClose={handleCloseSignUp}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To comment , you must have an account first. If yes,
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseSignUp();
                }}
              >
                do login now
              </span>
            </DialogContentText>
            <div>
              <TextField
                autoFocus
                margin="dense"
                value={formData.username}
                label="Username"
                type="text"
                required
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <TextField
              style={{ marginTop: "1rem" }}
              margin="dense"
              value={formData.email}
              label="Email Address"
              type="email"
              required
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <div style={{ marginTop: "1rem" }}>
              <TextField
                margin="dense"
                value={formData.password}
                label="Password"
                type="password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                required
                fullWidth
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignUp} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                authenticateUser();
              }}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
