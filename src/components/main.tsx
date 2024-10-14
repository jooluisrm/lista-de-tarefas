"use client"

import { useState } from "react";
import { Input } from "./input";
import { Tarefa } from "./tarefa";

export const Main = () => {

    const [input, setInput] = useState('');

    return (
        <div>
            <Input input={input} setInput={setInput}/>
            <div className="flex flex-col gap-3">
                <Tarefa />
                
            </div>
            
        </div>
    );
}