import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

const Applications = (props) => {
  const [listedApplications, setListedApplications] = useState([]);

  // update the state in the component
  useEffect(() => {
    setListedApplications(props.applications);
  }, [props.applications, setListedApplications]);

  // update the listed search result
  useEffect(() => {
    const match = props.applications.filter(
      (application) =>
        application.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
    );
    setListedApplications(match);
  }, [props.search, props.applications]);

  return (
    <div>
      <h2>Applications</h2>
      {listedApplications.length > 0 ? (
        <ul className="my-8 flex flex-col flex-wrap gap-10 md:flex-row">
          {listedApplications.map((app, index) => {
            return (
              <li key={index}>
                <div>
                  <a
                    className="link"
                    target="_blank"
                    href={app.url}
                    rel="noreferrer"
                  >
                    <Icon icon={app.icon} />
                    {app.name}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No Apps were found!</p>
        </div>
      )}
    </div>
  );
};

export default Applications;
