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
            alert('Apertou');
        }
    }

    return (
        <div>
            <Input input={input} setInput={setInput} enter={AddTarefa}/>
            <div className="flex flex-col gap-3">
                {listaTarefa.map((item) => (
                    <Tarefa />
                ))}
                <Tarefa />
                
            </div>
            
        </div>
    );
}