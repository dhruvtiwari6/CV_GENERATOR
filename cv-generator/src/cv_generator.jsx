import { useState } from "react";

function CvGenerator() {
    let [formData, setFormData] = useState({
        Name: "",
        email: "",
        PhoneNumber: "",
        SchoolName: "",
        CollegeName: "",
        XthCG: "",
        XIIthCG: "",
        CompanyName: "",
        position: "",
        AreaOfExperty: "",
        EmploymentDuration: ""
    })

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setFormData(prevState => ({...prevState, [id]: value}));
    }


    const objectArray = Object.entries(formData);
    let listItems = objectArray.map(([key, value]) => (
        <p key={key}>{key} : {value}</p>
    ));

    return (
        <>
            <h1 className="header">Cv - Generator</h1>
            <div className="OuterContainer">
                <div className="left-container">
                    <fieldset>
                        <legend>General Information</legend>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="Name" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="phone">Phone Number: </label>
                        <input type="tel" id="PhoneNumber" onChange={handleInputChange} />
                    </fieldset>
                    <br />
                    <fieldset>
                        <legend>Educational Experience</legend>
                        <label htmlFor="school">School Name: </label>
                        <input type="text" id="SchoolName" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="college">College Name: </label>
                        <input type="text" id="CollegeName" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="Xth">Xth CGPA: </label>
                        <input type="number" id="XthCG" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="XIIth">XIIth CGPA: </label>
                        <input type="number" id="XIIthCG" onChange={handleInputChange} />
                        <br />
                    </fieldset>
                    <br />
                    <fieldset>
                        <legend>Practical Experience</legend>
                        <label htmlFor="comp">Company Name: </label>
                        <input type="text" id="CompanyName" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="position">Position Name: </label>
                        <input type="text" id="position" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="experty">Area of Expertise: </label>
                        <input type="text" id="AreaOfExperty" onChange={handleInputChange} />
                        <br />
                        <label htmlFor="employmentDuration">Employment Duration: </label>
                        <input type="text" id="EmploymentDuration" onChange={handleInputChange} />
                    </fieldset>
                </div>
                <div className="right-container">
                    {listItems}
                </div>
            </div>
        </>
    );
}

export default CvGenerator;
