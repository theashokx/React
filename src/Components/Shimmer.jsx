import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-text shimmer-text-lg"></div>
            <div className="shimmer-text shimmer-text-md"></div>
            <div className="shimmer-text shimmer-text-sm"></div>
            <div className="shimmer-text shimmer-text-sm"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
