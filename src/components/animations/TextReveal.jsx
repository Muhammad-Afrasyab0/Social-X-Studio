export default function TextReveal({ text }) {
  return (
    <h2 className="overflow-hidden">
      <span className="inline-block text-reveal">
        {text}
      </span>
    </h2>
  );
}