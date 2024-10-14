"use client"

import { useState } from "react";
import { Input } from "./input";
import { Tarefa } from "./tarefa";
import { TarefaType } from "@/types/TarefaType";

export const Main = () => {

    const [input, setInput] = useState('');
    const [listaTarefa, setListaTarefa] = useState<TarefaType[]>([]);
    const [isLoading, setLoading] = useState(false);

    const VerificarInput = (input: string) => {
        if (input.trim() !== '') return true;
    }

    const AddTarefa = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!VerificarInput(input)) return;

        if (event.key.toLocaleLowerCase() === 'enter') {
            setLoading(true);
            setListaTarefa([...listaTarefa, {
                msg: input,
                checkbox: false
            }]);

            setInput('');
            setInterval(() => {
                setLoading(false);
            }, 1000);

        };
    }

    return (
        <div>

            <Input input={input} setInput={setInput} enter={AddTarefa} />
            {listaTarefa.length === 0 &&
                <h2 className="text-center text-gray-400 text-md">Adicione uma tarefa para começar !!!</h2>
            }
            {isLoading &&
                <h2 className="text-center text-gray-400 text-md">Carregando...</h2>
            }
            <div className="flex flex-col gap-3">
                {!isLoading && listaTarefa.map((item, index) => (
                    <Tarefa item={item} key={index} setListaTarefa={setListaTarefa} />
                ))}
            </div>
            {!isLoading && listaTarefa.length > 0 &&
                <div className="text-gray-400 text-md py-5 text-center">
                    Total de Tarefas: <span className="font-bold">{listaTarefa.length}</span>
                </div>
            }

        </div >
    );
}