import { useState } from 'react';
import { greeter } from '../utils/greeter';
import { getDate } from '../utils/getDate';
import { Applications, Bookmarks } from '../components/kubernetes/';
import { getIngressAnnotations } from '../lib/k8.js';
import Search from '../components/Layout/Search';

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
  const applicationsData = JSON.parse(request).applications;
  const bookmarksData = JSON.parse(request).bookmarks;
  return {
    props: { applications: applicationsData, bookmarks: bookmarksData },
  };
}

const Home = ({ applications, bookmarks }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [date, setDate] = useState(getDate());
  const [greeting, setGreeting] = useState(greeter());

  return (
    <div className="flex flex-col gap-y-8">
      <Search setInputSearch={setInputSearch} />
      <p>{date}</p>
      <h1 className="">{greeting}</h1>
      {applications && applications.length > 0 && (
        <Applications applications={applications} search={inputSearch} />
      )}
      {bookmarks && bookmarks.length > 0 && (
        <Bookmarks bookmarks={bookmarks} search={inputSearch} />
      )}
    </div>
  );
};

export default Home;
