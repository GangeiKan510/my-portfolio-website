export default function ExperienceCard(props) {
  return (
    <>
      <a className="row mt-5 mb-2 experience-card py-5 px-3 rounded bg-opacity-10" href="/">
        <div className="col-4">
          <div className="secondary-color small-font">
            {props.duration}{props.image}
          </div>
        </div>
        <div className="col-8 px-2">
          <div className="secondary-color">
            <p className="text-white title">
              {props.role} · {props.company}
              &nbsp; 
              <svg xmlns="http://www.w3.org/2000/svg" height="10" fill="#fff" class="bi bi-arrow-up-right title" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </p>
            <p>
              {props.description}
            </p>
            <div className="row skills-learned">
              {props.skills}
            </div>
          </div>
        </div>
      </a>
    </>
  )
}