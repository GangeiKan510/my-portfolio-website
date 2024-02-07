export default function CardImage(props) {
  return (
    <>
      <img
        className="img-fluid border border-4 border-secondary rounded"
        alt="project"
        src={props.source}
      />
    </>
  )
};