import React, { useContext } from "react";
import { Context } from "../Context";

export default function SwapAll() {
    const { swapAllTodo } = useContext(Context)
    return (
        <div className="swap">
            <button onClick={() => swapAllTodo()}>
                <span className="button_top">Swap All</span>
            </button>
        </div>

    )
}