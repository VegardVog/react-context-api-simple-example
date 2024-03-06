import { useContext } from "react";
import { Context } from "../App";

export default function Header() {
    const { appName } = useContext(Context);
    return <h1>{ appName }</h1>
}
