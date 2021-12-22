const Page2 = (props) => {
  const handleClick = () => {
    //back to the previous in the stack
    props.history.goBack();
  };
  return (
    <div onClick={handleClick}>
      <button>Go Back</button>
    </div>
  );
};
export default Page2;
