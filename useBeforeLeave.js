const useBeforeLeave = (onBefore) => {
  if (!(typeof onBefore === "function")) {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};
export default function App() {
  const begForLife = () => console.log("Please Don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
