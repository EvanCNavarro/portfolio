import { useReadingProgress } from "/src/hooks/useReadingProgress";

export default function ProgessBar() {
  const completion = useReadingProgress();

  return (
    <nav className="sticky z-50 top-0 h-8 bg-offPaper transition-all ease-in-out duration-200">
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-offTeal shadow-inner`}
      />
    </nav>
  );
}
