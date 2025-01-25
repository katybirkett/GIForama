interface SkeletonProps {
  count: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ count }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
