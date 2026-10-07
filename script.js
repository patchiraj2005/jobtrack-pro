let jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

function addJob() {
  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const status = document.getElementById("status").value;

  if (!company || !role) {
    alert("Company & Role fill pannu bro!");
    return;
  }

  jobs.push({ company, role, status });
  localStorage.setItem("jobs", JSON.stringify(jobs));
  
  document.getElementById("company").value = "";
  document.getElementById("role").value = "";
  
  showJobs();
}

function deleteJob(index) {
  jobs.splice(index, 1);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  showJobs();
}

function showJobs() {
  const list = document.getElementById("jobList");
  list.innerHTML = "";
  
  jobs.forEach((job, i) => {
    list.innerHTML += `
      <div class="job-card">
        <div class="info">
          <b>${job.company}</b>
          <p>${job.role}</p>
        </div>
        <span class="badge ${job.status}">${job.status}</span>
        <button onclick="deleteJob(${i})" style="background:#ef4444; padding:6px 10px; margin-left:10px;">X</button>
      </div>
    `;
  });
}

showJobs();