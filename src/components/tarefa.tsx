import { TarefaType } from "@/types/TarefaType";

type Props = {
    item: TarefaType;
    listaTarefa: TarefaType[];
    setListaTarefa: React.Dispatch<React.SetStateAction<TarefaType[]>>;
}

export const Tarefa = ({ item, listaTarefa, setListaTarefa }: Props) => {

    const handleCheckBox = () => {
        setListaTarefa((prevLista: TarefaType[]) =>
            prevLista.map((tarefa) =>
                tarefa.msg === item.msg ? { ...tarefa, checkbox: !tarefa.checkbox } : tarefa
            )
        );
    };

    return (
        <div className="bg-[#20212C] flex items-center gap-2 p-3 rounded-2xl">
            <input onClick={handleCheckBox} className="size-8" type="checkbox" name="" id="" checked={item.checkbox}/>
            <p className={`${item.checkbox && `line-through`}`}>{item.msg}</p>
        </div>
    );
}