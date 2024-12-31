import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ProgramRenderer from '../components/Programs/ProgramRenderer';

import academic_visits_data from '../data/Programs/academic_visits'
import research_blitz_data from '../data/Programs/research_blitz_data';
import sci_tech_data from '../data/Programs/sci_tech_spins';
import grip_data from '../data/Programs/grip';
import stem_mentorship_data from '../data/Programs/stem_mentorship';

export default function Program(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    const param = useParams()["*"];

    const validPrograms = [
        // "academic-visits",
        // "technical-events",
        "research-blitz",
        "sci-tech-spins",
        "grip",
        "stem-mentorship",
        // "institute-lectures"
    ]

    const progData = {
        "academic-visits": {
            "title": "Academic Visits",
            "data": academic_visits_data
        },
        "research-blitz": {
            "title": "Research Blitz",
            "data": research_blitz_data
        },
        "sci-tech-spins": {
            "title": "Sci-Tech Spins",
            "data": sci_tech_data
        },
        "grip": {
            "title": "GRIP - Grassroot Innovation Program",
            "data": grip_data
        },
        "stem-mentorship": {
            "title": "STEM Mentorship",
            "data": stem_mentorship_data
        },
    }

    React.useEffect(() => {
        setTitle(`${progData[param].title} - Academic Outreach and New Initiatives | IIT Delhi`)
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!validPrograms.includes(param)) {
        return <Navigate to="/programs" />
    } else {

        return (
            <ProgramRenderer data={progData[param].data} />
        )
    }
}
