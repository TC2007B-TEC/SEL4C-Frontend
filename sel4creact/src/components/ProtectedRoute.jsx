import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const access = localStorage.getItem('access');

  return (
    <Route
      {...rest}
      render={(props) =>
        access ? (
          <Component {...props} />
        ) : (
          <Navigate 
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
