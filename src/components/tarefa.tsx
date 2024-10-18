import { TarefaType } from "@/types/TarefaType";
import { useState } from "react";
import { Options } from "./options";

type Props = {
    item: TarefaType;
    listaTarefa: TarefaType[];
    setListaTarefa: (e: any) => void;
}

export const Tarefa = ({ item, listaTarefa, setListaTarefa }: Props) => {

    const [isChecked, setIsChecked] = useState(item.checkbox);
    const [showOptions, setShowOptions] = useState(false);

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

    const mostrarOptions = () => {
        if (!showOptions) {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    }

    const deletarItem = (id: number) => {
        if (id) {
            let useConfirm = confirm("Excluir esta tarefa é uma ação permanente. Tem certeza de que deseja prosseguir?");
            if (!useConfirm) return;
            const newList = listaTarefa.filter(item => item.id !== id);
            setListaTarefa(newList);
        }
        
    }
    const editarTarefa = (id: number) => {
        if (id) {
            const tarefaEditada = listaTarefa.find(item => item.id === id);
            let newText = prompt("Digite o novo texto:",tarefaEditada?.msg);
            if(newText?.trim() !== '' && tarefaEditada) {
                const newList = listaTarefa.map(item => item.id === id ? {...item, msg: newText} : item);
                setListaTarefa(newList);
            } else {
                alert("Erro ao editar tarefa!");
            }
            console.log(tarefaEditada)
        }
    }


    return (
        <div className="bg-[#20212C] flex justify-between items-center gap-2 py-3 px-5 rounded-2xl">
            <div className="flex items-center gap-5">
                <input
                    onClick={handleCheckBox}
                    onChange={e => setIsChecked(e.target.checked)}
                    className="size-8"
                    type="checkbox"
                    checked={isChecked}
                />
                <p className={`${isChecked && `line-through font-bold`}`}>{item.msg}</p>
            </div>

            <div onClick={mostrarOptions} className="text-2xl font-bold flex flex-col gap-2 items-center justify-center cursor-pointer h-3">

                <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                {showOptions && <Options deletar={deletarItem} editar={editarTarefa} item={item} />}

            </div>

        </div>
    );
}
