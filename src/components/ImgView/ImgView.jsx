"use client";
//Import react fuctions
import {useState, useEffect, useRef} from "react";
//Import next fuction
import Image from "next/image";
import Link from "next/link";
//Import images
import img2xp from "../../assets/images/img2xp.webp";
import img3xp from "../../assets/images/img3xp.webp";
import img4xp from "../../assets/images/img4xp.webp";
import img5xp from "../../assets/images/img5xp.webp";
import img6xp from "../../assets/images/img6xp.jpg";
import img7xp from "../../assets/images/img7xp.jpg";
import img8xp from "../../assets/images/img8xp.jpg";

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
  const [modalImg, setModalImg] = useState("/_next/static/media/img5xp.f5eea42c.jpg");

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleClickOpen = (img) => {
    setModalImg(img);
   
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  const handleClose = () => {
    setOpen(false);
   
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


  return (
    <>
      {/*  Escritorio dragable */}
      <motion.div
        ref={constraintsRef}
        className="container-dragable hidden md:block ">

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
            height={'auto'}
            width={90}
            src={img2xp}
            alt="Name example"></Image>
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
            height={'auto'}
            width={90}
            src={img3xp}
            alt="Name example"></Image>
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
            height={'auto'}
            width={150}
            src={img4xp}
            alt="Name example"></Image>
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
            height={'auto'}
            width={150}
            src={img5xp}
            alt="Name example"></Image>
        </motion.div>

        <motion.div
          style={{top: "38%", left: "12%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img6xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={'auto'}
            width={90}
            src={img6xp}
            alt="Name example"></Image>
        </motion.div>
        <motion.div
          style={{top: "22%", left: "56%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img7xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={'auto'}
            width={90}
            src={img7xp}
            alt="Name example"></Image>
        </motion.div>
        <motion.div
          style={{top: "53%", left: "72%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img8xp);
            }}
            draggable="false"
            className=" rounded-sm "
            height={'auto'}
            width={90}
            src={img8xp}
            alt="Name example"></Image>
        </motion.div>
      </motion.div>

      {/*  movile dragable */}
      <motion.div
        ref={constraintsResponsiveRef}
        className="container-dragable  md:hidden">
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
              height={'auto'}
            width={120}
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
              height={'auto'}
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
              height={'auto'}
            width={150}
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
              height={'auto'}
            width={150}
            src={img5xp}
            alt=""></Image>
        </motion.div>
        <motion.div
          style={{top: "24%", left: "6%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img6xp);
            }}
            draggable="false"
            className=" rounded-sm "
              height={'auto'}
            width={90}
            src={img6xp}
            alt=""></Image>
        </motion.div>
        <motion.div
          style={{top: "43%", left: "73%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img7xp);
            }}
            draggable="false"
            className=" rounded-sm "
              height={'auto'}
            width={90}
            src={img7xp}
            alt=""></Image>
        </motion.div>
        <motion.div
          style={{top: "62%", left: "20%"}}
          onDrag={handleDrag}
          drag
          dragConstraints={constraintsResponsiveRef}
          className="absolute  md:inline-block">
          <Image
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, img8xp);
            }}
            draggable="false"
            className=" rounded-sm "
              height={'auto'}
            width={90}
            src={img8xp}
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
          <Image className="w-100" src={modalImg} height={700} width={900} alt="holis" />
        </DialogContent>
      </Dialog>
    </>
  );
}
