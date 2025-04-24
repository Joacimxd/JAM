export default function Button(props) {
  return (
    <a
      href={props.link}
      style={{ backgroundColor: props.color }}
      className="rounded-full m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block"
    >
      <p className="px-9 py-2">{props.text}</p>
    </a>
  );
}
