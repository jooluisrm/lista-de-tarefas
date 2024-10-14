import { TarefaType } from "@/types/TarefaType";
import { useState } from "react";

type Props = {
    item: TarefaType;
    setListaTarefa: (e: any) => void;
}

export const Tarefa = ({ item, setListaTarefa }: Props) => {

    const [isChecked, setIsChecked] = useState(item.checkbox);

    const handleCheckBox = () => {
        // Atualiza o estado da lista de tarefas 
        setListaTarefa((prevLista: TarefaType[]) =>
            // Mapeia a lista de tarefas anterior
            prevLista.map((tarefa) =>
                // Verifica se a mensagem da tarefa atual é igual à mensagem do item clicado
                tarefa.id === item.id ?
                    // Se for igual, cria um novo objeto de tarefa com a propriedade 'checkbox' invertida
                    { ...tarefa, checkbox: !tarefa.checkbox } :
                    // Se não for igual, retorna a tarefa original
                    tarefa
            )
        );
    }


    return (
        <div className="bg-[#20212C] flex items-center gap-2 p-3 rounded-2xl">
            <input
                onClick={handleCheckBox}
                onChange={e => setIsChecked(e.target.checked)}
                className="size-8"
                type="checkbox"
                checked={isChecked}
            />
            <p className={`${isChecked && `line-through font-bold`}`}>{item.msg}</p>
        </div>
    );
}
