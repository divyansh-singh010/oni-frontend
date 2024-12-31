import React from 'react';
import './Team.css';
import Placeholder from './Placeholder';
import kurur from '../../assets/kurur.jpeg';
import shilpi from '../../assets/Shilpi-Sharma.png';
import image from '../../assets/team/saksham.jpeg';
import image2 from '../../assets/team/ajay.jpeg';
import image3 from '../../assets/team/nirmal.jpeg';

const Team = () => {
    const staffData = [
        { name: "Saksham", position: "Staff Member, IIT Delhi", image: image },
        { name: "Ajay", position: "Staff Member, IIT Delhi", image: image2 },
        { name: "Nirmal", position: "Staff Member, IIT Delhi", image: image3 },
    ];

    const student = [{ name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },]
    const student2 = [{ name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    { name: "Shreyash Verma", position: "Staff Member, IIT Delhi", image: image3 },
    ]
    return (
        <div className="team">
            <div className="team-heading">
                <h1 className="heading-1">
                    Meet the&nbsp;<div className="color">Team</div>
                </h1>
                <hr className="hr" />
                <h3 className="heading-2">Introducing the members that make it happen!!</h3>
            </div>

            <div className="faculty-head">
                <h2 className="heading-3">
                    <div className="color">Faculty</div>&nbsp;Head
                </h2>
                <div className="faculty-images">
                    <div className="image">
                        <Placeholder name={`Prof. Narayan Kurur`} pos={`Dean, Academics`} image={kurur} />
                    </div>
                    <div className="image">
                        <Placeholder name={`Prof. Shilpi Sharma`} pos={`Associate Dean, Outreach 
& New Initiatives`} image={shilpi} />
                    </div>
                </div>
            </div>

            <div className="staff">
                <h2 className="heading-3">
                    <div className="color">Staff</div>&nbsp;Members
                </h2>
                <div className="staff-images">
                    {staffData.map((staff, index) => (
                        <div className="image">
                            <Placeholder key={index} name={staff.name} pos={staff.position} image={staff.image} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className="hr-2" />
            <div className="staff">
                <h2 className="heading-3">
                    <div className="color">Student</div>&nbsp;Members
                </h2>
                <div className="student-images">
                    <div className="image">
                        <Placeholder name={student2[0].name} pos={student2[0].position} image={image} />
                    </div>
                    <div className="image">
                        <Placeholder name={student2[1].name} pos={student2[1].position} image={image} />
                    </div>
                </div>
                <div className="staff-images">
                    {student.map((student, index) => (
                        <div className="image">
                            <Placeholder key={index} name={student.name} pos={student.position} image={image} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="space"></div>
        </div>
    );
};

export default Team;
