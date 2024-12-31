import React from 'react'
import './Programs.css'
// import ProgramCard from './ProgramCard'
import ProgramCard from '../About/AboutTimelineBox'
import '../About/About.css'
import img from '../../assets/programs/sci_tech_spins/out.png'
import stem from '../../assets/programs/stem_mentorship/stem.png'
import grip from '../../assets/programs/grip/grip.png'
import change from '../../assets/programs/chng.png'

export default function ProgramsCluster() {
    const program_data = [
        {
            title: "SCI-TECH SPINS",
            text: [
                "The Indian Institute of Technology Delhi welcomes high-school students to its weekend Science and Technology (Sci Tech) seminars. Delivered by our faculty members engaged in cutting edge research in science and allied fields, these lectures, accompanied by lab demos, promise to take students on short, but riveting spins into the fascinating world that surrounds us, and that still holds innumerable mysteries for us to resolve.With lives returning to normalcy after the pandemic years, we are trying to go offline with our lectures. The offline interactions will be on an invite-only basis, and invited schools will be asked to send in small groups of high schoolers to attend them. However, the recordings of all lectures will be put up on IIT Delhi's official YouTube channel, so that they benefit a greater number of students both within India and outside.",
            ],
            image: img
        }, {
            title: "STEM Mentorship",
            text: [
                "The Indian Institute of Technology Delhi invites high-school girls to its STEM Mentorship Program, designed to spark curiosity and inspire future scientists. Through engaging weekend lectures by IIT Delhi faculty and immersive lab demos, students will explore the wonders of science and technology. This 6-month program offers creative training, hands-on research experience, and career counseling, opening doors to the exciting world of STEM and its endless possibilities.",
            ],
            image: stem
        }, {
            title: "GRIP",
            text: [
                "The Indian Institute of Technology Delhi welcomes high-school students to its weekend Science and Technology (Sci Tech) seminars. Delivered by our faculty members engaged in cutting edge research in science and allied fields, these lectures, accompanied by lab demos, promise to take students on short, but riveting spins into the fascinating world that surrounds us, and that still holds innumerable mysteries for us to resolve.",
            ],
            image: grip
        }, {
            title: "Change Makers",
            text: [
                "There have been many avenues to nurture talent at the college level but limited opportunities for reaching out to the budding child inventors (1, 2, 3). With the initiatives of the Outreach Committee of IIT Delhi inspiring the school students to take up STEM based careers and deep dive early on to work on some of the most pressing problems facing our society, this summer boot camp should complement such efforts in providing solutions to such problems. The Indian Institute of Technology Delhi would like to invite passionate high schoolers for a fast paced, hands-on, rapid prototyping based boot camp to provide them with state-of-the-art facilities at IIT Delhi to bring their impactful ideas into reality.",
            ],
            image: change
        },
    ]
    return (
        <div className="programs_container">
            <div className="programs_heading">
                <h2 className="programs_heading_text">Programs</h2>
                <p className="programs_heading_para">We at Academic Outreach - IIT Delhi, take pride in sharing our efforts to build meaningful connections with schools, colleges, universities, and communities around us. Through these programs, we strive to bridge the gap between academic excellence and societal needs, inspiring individuals to explore the exciting world of science and technology. Our mission is to empower school students with knowledge and mentorship, collaborate with colleges and universities to foster academic and research excellence, and extend our support to local communities through impactful initiatives. Each program represents our commitment to creating opportunities for learning, collaboration, and growth. We invite you to explore our programs and join us in driving innovation, solving challenges, and shaping a brighter future together.</p>
            </div>
            <div className="about_timeline">
                <div className="timeline_line"></div>
                {program_data.map((data, index) => {
                    return <ProgramCard key={index} index={index} year={data.year} text={data.text} image={data.image} />
                })}
            </div>
        </div>
    )
}
