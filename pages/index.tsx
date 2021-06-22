import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import { IPost } from '../types/post';
import { SITE_NAME } from '../utils/constants';
import { getAllPosts } from '../utils/mdxUtils';

type Props = {
  posts: IPost[];
};

const avatar: string = `/assets/avatar.png`;

const bio = `Im a Full-Stack TypeScript developer with 5+ years of experience in building 
  digital products using React, React-Native and Node.js. Im passionate about building clean user 
  interfaces and products that deliver smooth user experiences. Currently im playing with Solidity and building Ethereum dApps and i will share my learnings in this blog.
`

const Intro: React.FC = () => {
  return (
  <div className="bg-blue-100 dark:bg-gray-700">          
    <div className="max-w-prose mx-auto py-8">
      <p className="font-bold text-4xl py-4">👋 Hey,</p>
      <p className="font-bold text-4xl">I'm Ranadeep</p>
      <p className="font-medium text-xl">Full-Stack TypeScript Engineer, Solidity enthusiast</p>
      <div className="flex justify-between items-center">
        <p className="py-4">{bio}</p>
        <div className="flex-none">
          <Image
            src={avatar}   
            className="rounded-full"           
            alt={`Yeah, Thats me`}
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  </div>
  );
}


const Home: React.FC<Props> = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Header />
      <Intro />
      <div className="max-w-prose mx-auto">
        <h3 className="text-4xl font-bold my-8">Recent Posts</h3>
        <div className="space-y-12">
          {posts.map((post) => (
            <div key={post.slug}>
              <h2 className="text-2xl font-bold mb-4 border-b-2 hover:border-gray-400 inline">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <div className="flex justify-between mt-4 text-sm">
                <p>📅 Published: {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'thumbnail',
    'title',
    'description',
  ]);
  return { props: { posts } };
};