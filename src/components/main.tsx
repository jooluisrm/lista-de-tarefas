import { Input } from "./input";
import { Tarefa } from "./tarefa";

export const Main = () => {
    return (
        <div>
            <Input />
            <div className="flex flex-col gap-3">
                <Tarefa />
                
            </div>
            
        </div>
    );
}