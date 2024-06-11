"use client";
//Import react fuctions
import {useState} from "react";
//Import next fuction
import Image from "next/image";
import Link from "next/link";
//Import images
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
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
export default function ImgView() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="grid">
        <div className="grid__item  pos-1">
          <Image
            className=" rounded-sm "
            height={100}
            width={90}
            src={img2}
            alt=""
            onClick={handleClickOpen}></Image>
        </div>
        <div className="grid__item  pos-2">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-3">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-4">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-5">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-6">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-7">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-8">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
        <div className="grid__item  pos-9">
          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />

          <Image
            className=" rounded-sm"
            height={100}
            width={90}
            src={img2}
            alt=""
          />
        </div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent className="p-0">
          <Image
          className="w-100"
            src={img2}
            height={700}
            width={900}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
