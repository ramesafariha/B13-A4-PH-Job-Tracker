const jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "Frontend Developer",
        location: "Remote",
        type: "Full-Time",
        salary: "$130,000-$175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA• Part-time • $80,000 - $120,000",
        type: "",
        salary: "",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all",
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA •Full-time•$125,000 - $165,000",
        type: "",
        salary: "",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA• Full-time •$140,000 - $190,000",
        type: "",
        salary: "",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX • Full-time •$110,000 - $150,000",
        type: "",
        salary: "",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY • Full-time • $130,000 - $170,00",
        type: "",
        salary: "",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote • Full-time • $120,000 - $160,000",
        type: "",
        salary: "",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "Sylhet",
        type: "San Francisco, CA • Full-time • $130,000 - $175,000",
        salary: "",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all"
    }
];

let currentTab = "all";

const container = document.getElementById("jobsContainer");

function renderJobs() {

    container.innerHTML = "";

    let filtered = jobs.filter(job => 
        currentTab === "all" ? true : job.status === currentTab
    );

    document.getElementById("tabCount").innerText = filtered.length;

    if(filtered.length === 0){
        document.getElementById("emptyState").classList.remove("hidden");
    } else {
        document.getElementById("emptyState").classList.add("hidden");
    }

    filtered.forEach(job => {

        const card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <h3>${job.companyName}</h3>
            <p><strong>${job.position}</strong></p>
            <p>${job.location}</p>
            <p>${job.type}</p>
            <p>${job.salary}</p>
            <p>${job.description}</p>
            <div class="buttons">
                <button onclick="updateStatus(${job.id}, 'interview')">Interview</button>
                <button onclick="updateStatus(${job.id}, 'rejected')">Rejected</button>
                <button onclick="deleteJob(${job.id})">Delete</button>
            </div>
        `;

        container.appendChild(card);
    });

    updateDashboard();
}

function updateStatus(id, status){
    const job = jobs.find(j => j.id === id);
    job.status = status;
    renderJobs();
}

function deleteJob(id){
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index,1);
    renderJobs();
}

function updateDashboard(){
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "rejected").length;
}

document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", function(){
        document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentTab = this.dataset.tab;
        renderJobs();
    });
});

renderJobs();