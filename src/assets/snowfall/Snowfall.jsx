import "./snowfall.css";

export default function Snowfall() {
  return (
    <div className="snowflakes" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="snowflake" key={i}>
          {i % 3 === 0 ? "❄" : i % 2 === 0 ? "❆" : "❅"}
        </div>
      ))}
    </div>
  );
}
