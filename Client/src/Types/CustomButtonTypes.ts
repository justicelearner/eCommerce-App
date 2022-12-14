import { ReactNode } from "react";

export default interface CustomButtonProps{
    child?:ReactNode;
    type?:"submit" | "reset" | "button";
    text:string;
    btnStyle?:React.CSSProperties;
    checkout?:string;
    onclick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}