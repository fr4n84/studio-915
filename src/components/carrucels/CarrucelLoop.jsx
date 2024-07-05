"use client";
//Import lenis
import {ReactLenis} from "lenis/react";
//Import next fuction
import Image from "next/image";
//Import images
import img1 from "../../assets/images/img1.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import img12 from "../../assets/images/img11.jpg";
import img13 from "../../assets/images/img11.jpg";
import img14 from "../../assets/images/img11.jpg";
import img15 from "../../assets/images/img11.jpg";
import img16 from "../../assets/images/img11.jpg";
//Import react fuctions
import {useState, useEffect} from "react";
//Import mui compoents
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarrucelLoop() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ReactLenis
      infinite={true}
      syncTouch={true}
      root
      options={{
        orientation: "horizontal",
        gestureOrientataion: "both",
        infinite: true,
        syncTouch: true,
      }}>
      <div className="slides">
        <Image height={300} width={200} objectFit="cover" src={img7} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img1} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img4} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img5} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img6} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img7} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img1} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img4} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img5} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img6} alt="" />
        <Image height={300} width={200} objectFit="cover" src={img7} alt="" />
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </ReactLenis>
  );
}
