"use client";
//Import lenis
import { ReactLenis } from "lenis/react";
//Import next fuction
import Image from "next/image";
//Import images
import img2 from "../../../public/img/assets/img2.webp";
import img3 from "../../../public/img/assets/img3.webp";
import img4 from "../../../public/img/assets/img4.webp";
import img5 from "../../../public/img/assets/img5.webp";
import img6 from "../../../public/img/assets/img6.webp";
import img7 from "../../../public/img/assets/img7.jpg";
import img8 from "../../../public/img/assets/img8.webp";
import img9 from "../../../public/img/assets/img9.webp";
import img10 from "../../../public/img/assets/img10.webp";
import img11 from "../../../public/img/assets/img11.webp";
import img12 from "../../../public/img/assets/img12.webp";
//Import react fuctions
import { useState, useEffect } from "react";
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
  const [validatorScreen, setValidatorScreen] = useState("vertical");
  const [validatorInfinity, setValidatorInfinity] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setValidatorScreen("horizontal");
      setValidatorInfinity(true);
    }
  }, []);

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
        orientation: `${validatorScreen}`,
        gestureOrientataion: "both",
        infinite: validatorInfinity,
        syncTouch: true,
      }}
    >
      <div className="slides">
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img12}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img6}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img7}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img8}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img9}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img10}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img11}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img12}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img6}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img7}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img8}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img9}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img10}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img11}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={284}
            className="custom-image"
            src={img12}
            alt=""
          />
        </div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
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
