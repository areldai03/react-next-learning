import { useEffect } from "react";
import {Main} from "../components/Main"

export default function Home() {
  useEffect(()=>{
    document.body.style.backgroundColor = "lightblue";
    return ()=>{
        document.body.style.backgroundColor = "";
    };
});
  return (
    <Main page="index"/>
  );
}
