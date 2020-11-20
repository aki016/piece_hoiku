"use strict";

{
    const open = document.getElementById("open2");
    const close = document.getElementById("close2");
    const modal = document.getElementById("modal2");
    const mask= document.getElementById("mask2");

    open.addEventListener("click", ()=>{
        modal.classList.remove("hidden2");
        mask.classList.remove("hidden2");
    });

    close.addEventListener("click", ()=>{
        modal.classList.add("hidden2");
        mask.classList.add("hidden2");
    });

    mask.addEventListener("click", ()=>{
        // modal.classList.add("hidden");
        // mask.classList.add("hidden");
        // 同じ処理の場合↓でできる
        close.click();
    });


}