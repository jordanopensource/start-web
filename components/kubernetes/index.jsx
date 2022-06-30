import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

export const Applications = (props) => {
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

export const Bookmarks = (props) => {
  const [listedBookmarks, setListedBookmarks] = useState([]);

  // update the state in the component
  useEffect(() => {
    setListedBookmarks(props.bookmarks);
  }, [props.bookmarks, setListedBookmarks]);

  // update the listed search result
  useEffect(() => {
    const match = props.bookmarks.filter(
      (bookmark) =>
        bookmark.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
    );
    setListedBookmarks(match);
  }, [props.search, props.bookmarks]);
  return (
    <div>
      <h2>Bookmarks</h2>
      {listedBookmarks.length > 0 ? (
        <ul className="my-8 flex flex-col flex-wrap gap-10 md:flex-row">
          {listedBookmarks.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <a
                    className="link"
                    target="_blank"
                    href={item.url}
                    rel="noreferrer"
                  >
                    <Icon icon={item.icon} />
                    {item.name}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No Bookmarks were found!</p>
        </div>
      )}
    </div>
  );
};
