"use client"
import { useState } from "react"

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('idle')

        const res = await fetch("/api", {
            method: 'post',
            body: JSON.stringify({ name, email })
        })

        if (!res.ok) {
            setStatus('error')
        } else {
            setStatus('success')
            setName('')
            setEmail('')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-50 border rounded-lg p-6 flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
                <input
                    id="name"
                    className="rounded border p-2 text-sm"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    className="rounded border p-2 text-sm"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded" type="submit">
                Submit
            </button>
            {status === 'success' && (
                <p className="text-green-600 text-sm">Submitted successfully!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}
        </form>
    )
}
