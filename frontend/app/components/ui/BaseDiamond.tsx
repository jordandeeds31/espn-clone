const BaseDiamond = () => {
    return (
        /* 1. Parent is relative and square-sized to act as the "field" */
        <div className="relative w-10 h-10">
            {Array.from({ length: 4 }, (_, i) => {
                const positions = [
                    "top-0 left-1/2 -translate-x-1/2",    // 2nd Base (Top)
                    "right-0 top-1/2 -translate-y-1/2",   // 1st Base (Right)
                    "bottom-0 left-1/2 -translate-x-1/2", // Home Plate (Bottom)
                    "left-0 top-1/2 -translate-y-1/2",    // 3rd Base (Left)
                ];

                return (
                    <div
                        key={i}
                        className={`absolute w-3 h-3 border border-gray-200 rotate-45 ${positions[i]}`}
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default BaseDiamond