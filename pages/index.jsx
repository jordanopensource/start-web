import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { greeter } from '../utils/greeter';
import { getDate } from '../utils/getDate';
import Applications from '../components/kubernetes/Applications';
import Search from '../components/Search';
import { getApplications } from '../lib/k8.js';

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
    <div>
      <Search searchByName={searchByName} />
      <p>{date}</p>
      <h1 className="my-8">{greeting}</h1>

      {applications.length > 0 && (
        <Applications applications={applications} search={inputSearch} />
      )}
    </div>
  );
};

export default Home;
