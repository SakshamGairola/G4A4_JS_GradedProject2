var resume = [];

function onLoad(){
    fetch('./data.json')
        .then(res => res.json())
        .then(data => data);
    return data;
}

function getObjects(dataObject){
    resume = dataObject.resume;
    console.log(resume)
}

function setFirstElement(resume){
    console.log(resume)
    // setHTML(resume[0])
}


function setHTML(jsonData) {
    // console.log(jsonData)
    let dataElement = jsonData;
    let { basics, skills, work, Internship: internship, projects, education, achievements, interests } = dataElement;

    let introEl = document.querySelector('.main > .intro');
    var setHTML = `
        <div class="candidate-name">
			<span id="candidateName">${basics.name}</span>
		</div>
		<div class="positionAppFor">
			<span>Applied For : </span>
			<span id="position">${basics.AppliedFor}</span>
		</div>
		<div class="profile-picture">
			<img src="" alt="someIMG" />
		</div>
    `;
    introEl.innerHTML = setHTML;


    let workExpEl = document.querySelector('.workExp > .info');
    var setHTML = `
        <label for="companyName">
            Company Name:
        </label>
        <span id="companyName">${work["Company Name"]}</span>
        <br />
        <label for="prevPosition">Position: </label>
        <span id="prevPosition">${work["Position"]}</span>
        <br />
        <label for="stratDate">Start Date: </label>
        <span id="stratDate">${work["Start Date"]}</span>
        <br />
        <label for="endDate">End Date: </label>
        <span id="endDate">${work["End Date"]}</span>
        <br />
        <label for="summary">Summary: </label>
        <span id="summary">${work["Summary"]}</span>
    `;
    workExpEl.innerHTML = setHTML;


    let projectsEl = document.querySelector('.projects > .info');
    var setHTML = `
        <span id="projectLabel">
            ${projects.name}:
        </span>
        <span id="projectSummary">${projects.description}</span>
    `;
    projectsEl.innerHTML = setHTML;

    let educationEl = document.querySelector('.education > .info');
    var setHTML = `
        <ul>
            <li>
                <label for="ug">UG: </label>
                <span id="ug">${education["UG"]["institute"]}, ${education["UG"]["course"]}, ${education["UG"]["Start Date"]}, ${education["UG"]["End Date"]}, ${education["UG"]["cgpa"]}</span>
            </li>
            <li>
                <label for="seniorSecondary"
                    >Senior Secondary :
                </label>
                <span id="seniorSecondary">${education["Senior Secondary"]["institute"]}, ${education["Senior Secondary"]["cgpa"]}</span>
            </li>
            <li>
                <label for="highSchool"
                    >High School:
                </label>
                <span id="highSchool">${education["High School"]["institute"]}, ${education["High School"]["cgpa"]}</span>
            </li>
        </ul>
    `;
    educationEl.innerHTML = setHTML;

    let internshipEl = document.querySelector('.internship > .info');
    var setHTML = `
        <ul>
            <li>
                <label for="companyName">
                Company Name:
                </label>
                <span id="companyName">${internship["Company Name"]}</span>
            </li>
            <li>
                <label for="prevPosition">
                Position:
                </label>
                <span id="prevPosition">
                ${internship["Position"]}
                </span>
            </li>
            <li>
                <label for="startDate">
                Strat Date:
                </label>
                <span id="startDate">${internship["Start Datetion"]}</span>
            </li>
            <li>
                <label for="endDate">
                End Date:
                </label>
                <span id="endDate">${internship["End Date"]}</span>
            </li>
            <li>
                <label for="summary">
                Summary:
                </label>
                <span id="summary">${internship["Summary"]}</span>
            </li>
        </ul>
    `;
    internshipEl.innerHTML = setHTML;

    let achievementsEl = document.querySelector('.achievements > .info');
    console.log(achievements["Summary"])
    var setHTML = `
    <ul>
    `
    for (let summary of achievements["Summary"]) {
        setHTML += `
        <li>${summary}</li>
        `
        // console.log(summary)
    }

    setHTML += `
    </ul>
    `;
    achievementsEl.innerHTML = setHTML;


    let personalInfoEl = document.querySelector('.personalInfo > .info');
    var setHTML = `
        <span>${basics.phone}</span><br />
        <span>${basics.email}</span><br />
        <span><a href="${basics.profiles.url}">${basics.profiles.network}</a></span><br />
    `;
    personalInfoEl.innerHTML = setHTML;

    let techSkillEl = document.querySelector('.techSkill > .info');
    var setHTML = `
        <ul>
    `;

    for (let skill of skills["keywords"]){
        setHTML += `
            <li><span>${skill}</span></li>
        `
    }
    setHTML += `
        </ul>
    `;
    techSkillEl.innerHTML = setHTML;


    let hobbiesEl = document.querySelector('.hobbies > .info');
    var setHTML = `
        <ul>
    `;

    for (let skill of interests["hobbies"]){
        setHTML += `
            <li><span>${skill}</span></li>
        `
    }
    setHTML += `
        </ul>
    `;
    hobbiesEl.innerHTML = setHTML;
    
}

resume = onLoad();
setFirstElement(resume);