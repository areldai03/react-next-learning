import {Main} from "../components/Main"
import {useBgLightBlue} from "../hooks/useBgLightBlue"

export default function Home() {
  useBgLightBlue();
  return (
    <Main page="index"/>
  );
}
