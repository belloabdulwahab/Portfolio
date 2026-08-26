import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
    <AppRouter />
    <div
  style={{
    position: "fixed",
    bottom: 10,
    left: 10,
    zIndex: 99999,
    background: "red",
    color: "white",
    padding: "8px",
    fontSize: "12px",
  }}
>
  Width: {window.innerWidth}
  <br />
  Mobile ≤900px:{" "}
  {window.matchMedia("(max-width: 900px)").matches ? "YES" : "NO"}
  <br />
  Navbar elements: {document.querySelectorAll("nav").length}
  <br />
  Classes:{" "}
  {Array.from(document.querySelectorAll("nav"))
    .map((nav) => nav.className)
    .join(" | ") || "NONE"}
</div>
</>
);
}


export default App;