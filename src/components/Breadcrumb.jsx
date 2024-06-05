import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ pageName }) {
    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-title-md2 font-semibold text-white">
                {pageName}
            </h2>

            <nav>
                <ol className="flex items-center gap-2 text-white">
                    <li>
                        <Link className="font-medium" to="/dashboard/inicio">
                            Dashboard /
                        </Link>
                    </li>
                    <li className="font-medium">{pageName}</li>
                </ol>
            </nav>
        </div>
    )
}
