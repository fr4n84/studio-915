"use client";
//Import react fuctions
import {useState, useEffect, useRef} from "react";
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
//Import motion
import {motion} from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ImgView() {
  const constraintsRef = useRef(null);
  const constraintsResponsiveRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleClickOpen = (img) => {
    setModalImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setModalImg("");
    }, 100);
  };

  const handleMouseUp = (e, img) => {
    // Delay the check to ensure drag event is captured
    setTimeout(() => {
      if (!isDragging) {
        handleClickOpen(img.src);
      }
    }, 0);
  };

  const handleDrag = () => {
    setIsDragging(true);
  };

  console.log(constraintsRef);

  return (
    <>
      {/*  Escritorio dragable */}
      <motion.div ref={constraintsRef} className="container-dragable hidden md:block ">
        <motion.div
          style={{bottom: "30%", left: "50%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img1xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img1xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{bottom: "10%", left: "3%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img2xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img2xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{bottom: "19%", left: "33%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img3xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img3xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{top: "15%", left: "77%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img4xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img4xp}
            alt=""></Image>
        </motion.div>
        <motion.div
          style={{top: "22%", left: "36%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img5xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img5xp}
            alt=""></Image>
        </motion.div>
      </motion.div>

    

      {/*  movile dragable */}
      <motion.div ref={constraintsResponsiveRef} className="container-dragable  md:hidden">
        <motion.div
          style={{bottom: "30%", left: "50%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img1xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img1xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{bottom: "10%", left: "3%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img2xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img2xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{bottom: "46%", left: "17%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img3xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img3xp}
            alt=""></Image>
        </motion.div>

        <motion.div
          style={{bottom: "10%", left: "70%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img4xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img4xp}
            alt=""></Image>
        </motion.div>
        <motion.div
          style={{top: "22%", left: "36%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img5xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={100}
            width={90}
            src={img5xp}
            alt=""></Image>
        </motion.div>
      </motion.div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent className="p-0">
          <Image className="w-100" src={modalImg} height={700} width={900} />
        </DialogContent>
      </Dialog>
    </>
  );
}
