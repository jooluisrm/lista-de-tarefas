"use client"

import { useState } from "react";
import { Input } from "./input";
import { Tarefa } from "./tarefa";
import { TarefaType } from "@/types/TarefaType";

export const Main = () => {

    const [input, setInput] = useState('');
    const [listaTarefa, setListaTarefa] = useState<TarefaType[]>([]);

    const VerificarInput = (input: string) => {
        if (input.trim() !== '') return true
    }

    const AddTarefa = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!VerificarInput(input)) return

        if (event.key.toLocaleLowerCase() === 'enter') {
            
            setListaTarefa([...listaTarefa, {
                msg: input,
                checkbox: false
            }]);
            setInput('');
            alert("Tarefa adicionada!")
        }
    }

    return (
        <div>
            <Input input={input} setInput={setInput} enter={AddTarefa}/>
            <div className="flex flex-col gap-3">
                {listaTarefa.map((item, index) => (
                    <Tarefa item={item} key={index} listaTarefa={listaTarefa} setListaTarefa={setListaTarefa}/>
                ))}  
            </div>
            
        </div>
    );
}