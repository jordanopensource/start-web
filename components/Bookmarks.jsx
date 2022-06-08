import React, { useEffect, useState } from 'react';
import Icon from './Icon';

const Bookmarks = (props) => {
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
          {listedBookmarks.map((app, index) => {
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

export default Bookmarks;
