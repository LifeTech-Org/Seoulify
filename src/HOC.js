import React from "react";

function withFoo(Components) {
  return function (props) {
    return <Components {...props} />;
  };
}

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
const Loading = () => {
  return <div>Loading</div>;
};
function withLoading(Component) {
  return function ({ isLoading, ...rest }) {
    return isLoading ? <Loading /> : <Component {...rest} />;
  };
}

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading;
