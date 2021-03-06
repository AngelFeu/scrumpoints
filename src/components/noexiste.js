import React from 'react';

const NoExiste = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist. This can also happen when you tried 
        to access a private session directly. Please use the <a href="/sessions">Sessions</a>
        view to enter the password and access the session.
        </p>
    </div>
  );
}

export default NoExiste;
