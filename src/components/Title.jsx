export default function Title({ text1, text2 }) {
  return (
    <h2
      className="text-4xl lg:text-5xl font-light text-center mb-16 text-gray-900"
    >
      {text1}
      {/* <span className="text-[#0081cf] italic font-serif"> */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary font-serif italic">
        {text2}
      </span>
    </h2>
  );
}
