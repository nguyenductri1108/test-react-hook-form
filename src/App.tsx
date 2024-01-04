import { useState } from "react";
import "./App.css";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function App() {
    const { register, control } = useForm();
    const { name, ref, onChange, onBlur } = register("username");

    return (
        <>
            <form>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" {...register("username")}></input>

                <label htmlFor="email">Email</label>
                <input id="email" type="text" {...register("email")}></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register("password")}></input>

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
        </>
    );
}

export default App;
