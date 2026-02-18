"use client"
import { useState } from "react"

const CARD_LABEL = "Drag me!"

export default function DragExample() {
    const [isDropped, setIsDropped] = useState(false)
    const [isDragOver, setIsDragOver] = useState(false)

    return (
        <div>
            <p className="text-sm text-slate-500 mb-6">Drag the card into the drop zone.</p>
            <div className="flex gap-10 items-center justify-center">
                {/* Drop zone */}
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                        e.preventDefault()
                        const data = e.dataTransfer.getData('text/plain')
                        if (data) {
                            setIsDropped(true)
                            setIsDragOver(false)
                        }
                    }}
                    className={`w-48 h-32 border-2 border-dashed rounded-xl flex items-center justify-center transition-colors ${
                        isDragOver
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-400 bg-slate-50"
                    }`}
                >
                    {isDropped
                        ? <span className="font-semibold text-blue-600">{CARD_LABEL}</span>
                        : <span className="text-slate-400 text-sm">Drop here</span>
                    }
                </div>

                {/* Draggable card or reset button */}
                {!isDropped ? (
                    <div
                        draggable="true"
                        onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', CARD_LABEL)
                        }}
                        className="w-36 h-24 bg-blue-500 text-white rounded-xl flex items-center justify-center font-semibold cursor-grab active:cursor-grabbing shadow-md select-none text-sm"
                    >
                        {CARD_LABEL}
                    </div>
                ) : (
                    <button
                        onClick={() => setIsDropped(false)}
                        className="text-sm text-slate-500 hover:text-slate-700 underline"
                    >
                        Reset
                    </button>
                )}
            </div>
        </div>
    )
}
