import "./header.scss";

export default function Header(props: any) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h2>{props.heading}</h2>
    </div>
  );
}
