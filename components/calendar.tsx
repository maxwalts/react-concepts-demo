"use client"
import { useState } from "react"

type CellDay = { date: number; month: number; year: number; isSelectedMonth: boolean }

type DateCellButtonProps = {
    onClick: () => void
    cellDayObject: CellDay
    selectedDate: Date
}

function getDateOfFirst(selectedDate: Date) {
    const newDate = new Date(selectedDate.toString())
    newDate.setDate(1)
    return newDate
}

function getCellDay(dateOfFirst: Date, row: number, col: number) {
    const dayOfFirst: number = dateOfFirst.getDay()
    let isSelectedMonth = true
    const d = new Date(dateOfFirst.getFullYear(), dateOfFirst.getMonth(), 1 - dayOfFirst + row + col * 7)

    if (d.getMonth() != dateOfFirst.getMonth()) {
        isSelectedMonth = false
    }
    return { date: d.getDate(), month: d.getMonth(), year: d.getFullYear(), isSelectedMonth }
}

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    function handleIncrementMonth() {
        const newDate = new Date(selectedDate.toString())
        newDate.setMonth(newDate.getMonth() + 1)
        setSelectedDate(newDate)
    }

    function handleDecrementMonth() {
        const newDate = new Date(selectedDate.toString())
        newDate.setMonth(newDate.getMonth() - 1)
        setSelectedDate(newDate)
    }

    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded"
    const monthYear = `${selectedDate.toDateString().split(" ")[1]} ${selectedDate.toDateString().split(" ")[3]}`

    return (
        <div className="bg-slate-50 rounded-lg p-4 border inline-block">
            <div className="flex items-center justify-between mb-3 gap-4">
                <button className={btnClass} onClick={handleDecrementMonth}>{'<'}</button>
                <span className="font-bold">{monthYear}</span>
                <button className={btnClass} onClick={handleIncrementMonth}>{'>'}</button>
            </div>

            <table className="mx-auto">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {[0, 1, 2, 3, 4, 5].map((j) => (
                        <tr key={`row_${j}`}>
                            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                                const cellDayObject = getCellDay(getDateOfFirst(selectedDate), i, j)
                                return (
                                    <td key={`cell_${i}_${j}`}>
                                        <DateCellButton
                                            onClick={() => setSelectedDate(new Date(cellDayObject.year, cellDayObject.month, cellDayObject.date))}
                                            cellDayObject={cellDayObject}
                                            selectedDate={selectedDate}
                                        />
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function DateCellButton({ onClick, cellDayObject, selectedDate }: DateCellButtonProps) {
    // isSelected is not state because it can be computed from props
    const isSelected = cellDayObject.date == selectedDate.getDate() && cellDayObject.month == selectedDate.getMonth()

    return (
        <button
            onClick={onClick}
            className={`hover:transition-all duration-200 text-center hover:font-bold hover:cursor-pointer border w-12 h-12 rounded ${!cellDayObject.isSelectedMonth && "text-slate-400"} ${isSelected ? "bg-blue-400 font-bold border-blue-700 border-2" : "bg-white hover:bg-blue-100"}`}
        >
            {cellDayObject.date}
        </button>
    )
}
