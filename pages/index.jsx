import { useState } from 'react';
import { getIngressAnnotations } from '../lib/k8.js';
import { Applications, Bookmarks } from '../components/kubernetes/';
import Search from '../components/Layout/Search';
import Clock from '../components/Clock';
import FullDate from '../components/FullDate';
import Greeter from '../components/Greeter';

export async function getServerSideProps({ req, res }) {
  // This value is considered fresh for sixty seconds (s-maxage=59).
  // If a request is repeated within the next 59 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=59, stale-while-revalidate=59'
  );
  const request = await getIngressAnnotations();
  let applicationsData = null;
  let bookmarksData = null;
  if (JSON.parse(request).applications) {
    applicationsData = JSON.parse(request).applications;
  }
  if (JSON.parse(request).bookmarks) {
    bookmarksData = JSON.parse(request).bookmarks;
  }
  return {
    props: { applications: applicationsData, bookmarks: bookmarksData },
  };
}

const Home = ({ applications, bookmarks }) => {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="flex flex-col gap-y-8">
      <Search setInputSearch={setInputSearch} />
      <div className="flex flex-col gap-4 md:flex-row">
        <FullDate />
        <div className="separator-line border-b-2 md:border-r-2 md:border-b-0"></div>
        <Clock />
      </div>
      <Greeter />
      {applications && applications.length > 0 ? (
        <Applications applications={applications} search={inputSearch} />
      ) : (
        <div>
          <p>No Apps were found!</p>
        </div>
      )}
      {bookmarks && bookmarks.length > 0 ? (
        <Bookmarks bookmarks={bookmarks} search={inputSearch} />
      ) : (
        <div>
          <p>No Bookmarks were found!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
