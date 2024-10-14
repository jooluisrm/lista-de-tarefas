import { TarefaType } from "@/types/TarefaType";
import { useState } from "react";

type Props = {
    item: TarefaType;
}

export const Tarefa = ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.checkbox);


    return (
        <div className="bg-[#20212C] flex items-center gap-2 p-3 rounded-2xl">
            <input
                onChange={e => setIsChecked(e.target.checked)}
                className="size-8"
                type="checkbox"
                checked={isChecked}
            />
            <p className={`${isChecked && `line-through font-bold`}`}>{item.msg}</p>
        </div>
    );
}