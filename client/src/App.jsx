import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "./Card";

function App() {
  const handleBuyItemButton = async (amount) => {
    const res = await axios.post("http://localhost:5000/create-order", {
      amount,
    });
    console.log(res.data);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Card amount={5000} handleBuyItemButton={handleBuyItemButton}>
          hello
        </Card>
        <Card amount={4000} handleBuyItemButton={handleBuyItemButton}>
          hello
        </Card>
      </div>
    </>
  );
}

export default App;
