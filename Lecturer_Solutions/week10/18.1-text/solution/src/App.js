import ShowText from "./ShowText.component";

function App() {
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, quo aliquid? Id, nostrum beatae reprehenderit expedita animi assumenda voluptas illo pariatur esse sed facilis sapiente incidunt. Perferendis natus praesentium quis.Nobis repellendus eligendi dolor illo dolore provident ratione quisquam, aspernatur error, voluptates ipsum culpa sunt, aliquam impedit excepturi sed aperiam! Labore nisi eligendi nulla ipsam quam, nam totam iure cum!Dolores quibusdam recusandae earum nisi? Natus doloribus voluptate excepturi, expedita nam, itaque iste laboriosam minima perspiciatis accusamus minus adipisci velit. Nisi quos esse quis. Iure nostrum voluptatem commodi aliquam debitis?";

  return (
    <div style={{ padding: "20rem" }}>
      <ShowText text={text} maxLength={200} />
    </div>
  );
}

export default App;
