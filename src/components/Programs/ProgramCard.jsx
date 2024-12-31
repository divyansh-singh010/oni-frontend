import React from 'react'
import './Programs.css'
import { Link } from 'react-router-dom'

export default function ProgramCard(props) {
    return (
        <Link to={`/programs/${props.href}`} className="program_card">
            <div>
                <p>{props.title}</p>
            </div>
        </Link>
    )
}
