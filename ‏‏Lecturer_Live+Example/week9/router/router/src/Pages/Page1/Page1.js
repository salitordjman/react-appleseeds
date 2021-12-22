const Page1 = (props) => {
  //   console.log(props.history.location.pathname);
  const handleClick = () => {
    props.history.push("/page2");
    //  ["/","/page1","/page2"]

    props.history.replace("/page2");
    //  ["/"/page2""]
  };
  return (
    <div>
      <button onClick={handleClick}>Go to Page2</button>
    </div>
  );
};
export default Page1;
