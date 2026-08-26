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
</div>
</>
  );
}


export default App;