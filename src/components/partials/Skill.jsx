export default function Skill(props) {
  return (
    <>
      <span className="small-font border p-2 rounded-pill mr-2 my-1 skill-pill">
        {props.skill}
      </span>
    </>
  )
};