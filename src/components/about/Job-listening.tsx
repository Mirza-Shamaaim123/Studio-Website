interface JobPosition {
  title: string
  isRemote: boolean
}

export default function JobListings() {
  const jobPositions: JobPosition[] = [
    {
      title: "Senior 3D Animation Artist",
      isRemote: true,
    },
    {
      title: "Senior 3D Artist",
      isRemote: true,
    },
    {
      title: "Art Director (Interior)",
      isRemote: false,
    },
    // You can add more positions as needed
  ]

  return (
    <div className="job-listings-container">
      <div className="job-listings-grid">
        {jobPositions.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-tag-container">
              {job.isRemote ? (
                <span className="job-remote-tag">Remote</span>
              ) : (
                <span className="job-tag-placeholder"></span>
              )}
            </div>
            <h3 className="job-title">{job.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
