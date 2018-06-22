/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React from 'react';

function Page(props) {
  const id = props.match.params.id;
  return (
    <div className="page2">
      <p className="title">Hello World!</p>
      <p>By Emiya</p>
      <p>page say: page2</p>
      <p>id is: {id}</p>

      <style jsx>{`
        .title {
          color: #ff0;
        }
      `}</style>
    </div>
  );
}

export default Page;
