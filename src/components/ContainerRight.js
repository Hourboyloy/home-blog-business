import React from 'react'
import { Link } from 'react-router-dom';

function ContainerRight() {
  return (
    <div className="w-full lg:pl-14 pt-8 space-y-8">
      <div>
        <h3 className=" font-bold text-2xl text-gray-700">Recent Posts</h3>
      </div>
      <div className="flex flex-col space-y-2 text-blue-700">
        <Link> 15 Shocking Elon Musk Tweets About Stock Market</Link>
        <Link>Want a Career in Technology? Make This Your Secret Weapon</Link>
        <Link>
          The Health Industry Is Changing Fast. Here’s How to Keep Pace
        </Link>
        <Link>Everything You Ever Wanted to Know About Technology</Link>
        <Link>The Frightening Affect of Climate Change on Government</Link>
      </div>
      <div>
        <img src={require(`../assets/stock-marker/right.jpg`)} alt="" />
      </div>
      <div>
        <h3 className=" font-bold text-2xl text-gray-700">Categories</h3>
      </div>
      <div className="flex flex-col space-y-2 text-blue-700">
        <Link>
          Automobile <span className=" text-gray-700">(4)</span>
        </Link>
        <Link>
          Editors Pick <span className=" text-gray-700">(6)</span>
        </Link>
        <Link>
          Guests Posts <span className=" text-gray-700">(2)</span>
        </Link>
        <Link>
          Health <span className=" text-gray-700">(6)</span>
        </Link>
        <Link>
          Must Read <span className=" text-gray-700">(3)</span>
        </Link>
        <Link>
          Politics <span className=" text-gray-700">(5)</span>
        </Link>
        <Link>
          Stock Market <span className=" text-gray-700">(8)</span>
        </Link>
        <Link>
          Technology <span className=" text-gray-700">(6)</span>
        </Link>
      </div>
    </div>
  );
}

export default ContainerRight
