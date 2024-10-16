type Props = {
    input: string;
    setInput: (e: string) => void;
    enter: (e: any) => void;
}

export const Input = ({ input, setInput, enter }: Props) => {
    return (
        <div>
            <div className="flex items-center">
                <div className="text-3xl translate-x-4 text-gray-400 absolute">+</div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyUp={enter}
                    className="outline-none my-5 min-w-full bg-[#17181F] border border-gray-500 py-2 px-10 rounded-2xl"
                    type="text"
                    placeholder="Adicione uma tarefa..."
                    autoFocus
                />
            </div>
        </div>

    );
}