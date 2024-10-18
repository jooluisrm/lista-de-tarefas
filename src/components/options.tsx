import { TarefaType } from "@/types/TarefaType";

type Props = {
    deletar: (id: number) => void;
    editar: (id: number) => void;
    item: TarefaType;
}

export const Options = ({deletar, editar, item}: Props) => {
    return (
        <div className="text-sm bg-[#17181F] p-2 rounded-xl border border-white flex flex-col gap-2 mt-24 absolute z-10">
            <p onClick={() => editar(item.id)}>editar</p>
            <p onClick={() => deletar(item.id)} className="text-red-700">deletar</p>
        </div>
    );
}