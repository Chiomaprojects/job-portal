const ManageJobs = () => {

  const AvailableJobs = [
    {name:"Front end engineer", location: "on-site", salary: "$4000" },
    {name:"Front end engineer", location: "on-site", salary: "$4000" },
    {name:"Front end engineer", location: "on-site", salary: "$4000" },
    {name:"Front end engineer", location: "on-site", salary: "$4000" },
    {name:"Front end engineer", location: "on-site", salary: "$4000" },
  ]
  return (
    <div>
      Manage jobs
      {AvailableJobs.map((j) =>
         <div className="gap-3 flex">
          <span>{j.name}</span>
          <span>{j.location}</span>
          <span>{j.salary}</span>
      </div>)}
      </div>
  )
}

export default ManageJobs;