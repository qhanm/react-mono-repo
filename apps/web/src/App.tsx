import { Button } from "@ui";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Monorepo with Vite</h1>
      <Button
        variant="primary"
        onClick={() => alert("Primary button clicked!")}
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        onClick={() => alert("Secondary button clicked!")}
      >
        Secondary
      </Button>
    </div>
  );
}

export default App;
