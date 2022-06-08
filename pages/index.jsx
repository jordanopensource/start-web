import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { greeter } from '../utils/greeter';
import { getDate } from '../utils/getDate';
import Applications from '../components/kubernetes/Applications';
import Search from '../components/Layout/Search';
import { getApplications } from '../lib/k8.js';
import Bookmarks from '../components/Bookmarks';
import bookmarks from '../data/bookmarks.json';

export async function getServerSideProps() {
  const applicationsRequest = await getApplications();
  const applicationsData = JSON.parse(applicationsRequest);
  return { props: { applications: applicationsData } };
}

const Home = ({ applications }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [date, setDate] = useState(getDate());
  const [greeting, setGreeting] = useState(greeter());

  const searchByName = (input) => setInputSearch(input);

  return (
    <div className="flex flex-col gap-y-8">
      <Search searchByName={searchByName} />
      <p>{date}</p>
      <h1 className="">{greeting}</h1>
      {applications.length > 0 && (
        <Applications applications={applications} search={inputSearch} />
      )}

      {bookmarks.length > 0 && (
        <Bookmarks bookmarks={bookmarks} search={inputSearch} />
      )}
    </div>
  );
};

export default Home;
