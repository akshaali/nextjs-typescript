type GreetPropsTypes = {
  name?: {
    firstName?: string;
    lastName?: string;
  };
};

const Greet = (props: GreetPropsTypes) => {
  return <h1>Hello {props.name?.firstName}</h1>;
};

Greet.defaultProps = {
  name: { firstName: "", lastName: "" },
};

export default Greet;
