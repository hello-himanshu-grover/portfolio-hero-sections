import React from 'react'

const stats = [
    {
        id: "clients",
        name: "Served Clients",
        value: "30+"
    },
    {
        id: "projects",
        name: "No of Projects",
        value: "200+"
    },
    {
        id: "codelines",
        name: "No of lines coded",
        value: "1M+"
    }
]

export default function Stats() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-xl leading-7 text-gray-800">{stat.name}</dt>
                            <dd className="order-first text-9xl font-serif font-semibold tracking-tight text-white sm:text-9xl" style={{"-webkit-text-stroke": "2px #000"}}>
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
