interface BaseDiamondProps {
    outs?: number;
}

const BaseDiamond = ({ outs = 0 }: BaseDiamondProps) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center relative w-7 h-7">
                {Array.from({ length: 3 }, (_, i) => {
                    const positions = [
                        "top-0 left-1/2 -translate-x-1/2",    // 2nd Base (Top)
                        "right-0 top-1/2 -translate-y-1/2",   // 1st Base (Right)
                        "left-0 top-1/2 -translate-y-1/2",    // 3rd Base (Left)
                    ];
                    return (
                        <div
                            key={i}
                            className={`absolute w-2 h-2 border border-gray-200 rotate-45 ${positions[i]}`}
                        />
                    );
                })}
            </div>

            <p className="text-[8px] font-bold uppercase">
                {outs} {outs === 1 ? 'out' : 'outs'}
            </p>
        </div>
    );
}

export default BaseDiamond;