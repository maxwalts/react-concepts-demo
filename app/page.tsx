"use client"

import Calendar from '@/components/calendar'
import DragExample from '@/components/dragExample'
import Form from '@/components/form'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">React Concepts Demo</h1>
          <p className="mt-2 text-slate-500">Interactive examples exploring core React patterns</p>
        </header>

        <div className="flex flex-col gap-8">
          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-1">Calendar Picker</h2>
            <p className="text-xs text-slate-400 mb-4">Concepts: useState · derived state · date math</p>
            <Calendar />
          </section>

          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-1">Drag &amp; Drop</h2>
            <p className="text-xs text-slate-400 mb-4">Concepts: drag events · useState · dataTransfer API</p>
            <DragExample />
          </section>

          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-1">Contact Form</h2>
            <p className="text-xs text-slate-400 mb-4">Concepts: controlled inputs · useState · fetch</p>
            <Form />
          </section>
        </div>
      </div>
    </main>
  )
}
