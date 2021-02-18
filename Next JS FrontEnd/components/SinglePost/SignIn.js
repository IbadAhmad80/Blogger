import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SignUp from "./SignUp";
import axios from "axios";
import { server } from "../../config/index";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/actions";

export default function SignIn({ blog_id, appendComment, type }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const token = useSelector((state) => state.token);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const publishComment = async () => {
    if (!token) {
      handleClickOpen();
      return;
    }
    try {
      const { data } = await axios.get(`${server}/users/me`, {
        headers: {
          Authorization: `Bearer ${Cookie.get("token")}`,
        },
      });
      await axios.post(`${server}/comments`, {
        blog_id: blog_id,
        publisher: data.username,
        comment: comment,
      });
      // console.log("response is :", res);
      comment &&
        appendComment({
          blog_id: blog_id,
          publisher: data.username,
          comment: comment,
        });
    } catch (err) {
      alert(err);
      console.log("error while publishing the comment :", err);
    }
  };
  const authenticateUser = async () => {
    //code won't run on server side
    if (typeof window === "undefined") {
      return;
    }
    let res;
    try {
      res = await axios.post(`${server}/auth/local`, {
        identifier: formData.email,
        password: formData.password,
      });
      Cookie.set("token", res.data.jwt);
      setFormData({ password: "", email: "" });
      dispatch(signIn(res.data.jwt));
      handleClose();
    } catch (err) {
      console.log("error in sign in section :", res);
      // alert(res.data.message.messages[0].message);
      alert(err);
    }
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2rem 4rem",
          }}
        >
          {!type && (
            <input
              type="text"
              required
              value={comment}
              placeholder=" your comment"
              onChange={(e) => setComment(e.target.value)}
            ></input>
          )}

          <Button variant="outlined" color="primary" onClick={publishComment}>
            {token ? "Comment" : "Sign In"}
          </Button>
        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <SignUp
                handleClose={handleClose}
                handleOpenSignIn={handleClickOpen}
              />
            </DialogContentText>
            <TextField
              style={{ marginTop: "1rem" }}
              margin="dense"
              value={formData.email}
              label="Email Address/Username "
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
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
