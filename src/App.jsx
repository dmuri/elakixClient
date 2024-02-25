import { useEffect } from "react"


function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://elakixapi.azurewebsites.net/testperson');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  return (
    <>
      Hello Mate!
    </>
  )
}

export default App
