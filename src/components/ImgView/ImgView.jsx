"use client";
//Import react fuctions
import {useState} from "react";
//Import next fuction
import Image from "next/image";
import Link from "next/link";
//Import images
import img1xp from "../../assets/images/img1xp.jpg";
import img2xp from "../../assets/images/img2xp.jpg";
import img3xp from "../../assets/images/img3xp.jpg";
import img4xp from "../../assets/images/img4xp.jpg";
import img5xp from "../../assets/images/img5xp.jpg";
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
//Import mui compoents
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
//Import dragable
import Draggable from "react-draggable";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ImgView() {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  const handleMouseUp = () => {
    // Delay the check to ensure drag event is captured
    setTimeout(() => {
      if (!isDragging) {
        handleClickOpen();
      }
    }, 0);
  };

  const handleDrag = () => {
    setIsDragging(true);
  };

  return (
    <>
     {/*  Escritorio dragable */}
      <Draggable
        bounds="body"
        defaultPosition={{x: 22, y: 400}}
        onDrag={handleDrag}>
        <div className="z-10  hidden md:inline-block absolute">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img2xp}
            alt=""></Image>
        </div>
      </Draggable>


 {/*  movile dragable */}
      <Draggable
        onDrag={handleDrag}
        bounds="body"
        defaultPosition={{x: 22, y: 300}}>
        <div className="z-10  md:hidden absolute">
          <Image
            onMouseDown={handleMouseDown}
            onClick={() => handleClickOpen()}
            draggable="false"
            className=" rounded-sm "
            height={5}
            width={100}
            src={img1xp}
            alt=""></Image>
        </div>
      </Draggable>

      <Draggable
        onDrag={handleDrag}
        bounds="body"
        defaultPosition={{x: 220, y: 250}}>
        <div className="z-10  md:hidden absolute">
          <Image
            onMouseDown={handleMouseDown}
            onClick={() => handleClickOpen()}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img2xp}
            alt=""></Image>
        </div>
      </Draggable>

      <Draggable
        onDrag={handleDrag}
        bounds="body"
        defaultPosition={{x: 100, y: 80}}>
        <div className="z-10  md:hidden absolute">
          <Image
            onMouseDown={handleMouseDown}
            onClick={() => handleClickOpen()}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img3xp}
            alt=""></Image>
        </div>
      </Draggable>

      <Draggable
        onDrag={handleDrag}
        bounds="body"
        defaultPosition={{x: 70, y: 450}}>
        <div className="z-10  md:hidden absolute">
          <Image
            onMouseDown={handleMouseDown}
            onClick={() => handleClickOpen()}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img4xp}
            alt=""></Image>
        </div>
      </Draggable>

      <Draggable
        onDrag={handleDrag}
        bounds="body"
        defaultPosition={{x: 250, y: 490}}>
        <div className="z-10  md:hidden absolute">
          <Image
            onMouseDown={handleMouseDown}
            onClick={() => handleClickOpen()}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img5xp}
            alt=""></Image>
        </div>
      </Draggable>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent className="p-0">
          <Image className="w-100" src={img2xp} height={700} width={900} />
        </DialogContent>
      </Dialog>
    </>
  );
}
