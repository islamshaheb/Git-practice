/** @format */

import React, { useState } from 'react';
import './App.css';
import first_video from './media/bunny_ears.mp4';
import second_video from './media/outer_space.mp4';
import superhero_yeti from './media/superhero_yeti.mp4';
function Bgcolor() {
  const backgrounds = [
    {
      name: 'bunny_ears',
      type: 'mp4',
    },
    {
      name: 'outer_space',
      type: 'mp4',
    },
    {
      name: 'superhero_yeti',
      type: 'mp4',
    },
    {
      name: 'toboggan',
      type: 'jpg',
    },
    {
      name: 'yeti_village',
      type: 'jpg',
    },
  ];

  const [count, setcount] = useState(0);
  var rem = Math.abs(count) % backgrounds.length;
  var typeName = backgrounds[rem].type;
  var curFileName = backgrounds[rem].name;
  return (
    <div>
      <button id='btn' onClick={() => setcount(count - 1)}>
        Prev-Background:(Click Here)
      </button>
      <button id='btn' onClick={() => setcount(count + 1)}>
        Next-Background:(Click Here)
      </button>
      {curFileName === 'bunny_ears' && (
        <div>
          <video className='videoTag' autoPlay loop>
            <source src={first_video} type='video/mp4' />
          </video>
          <div class='content'>
            <h1>Heading</h1>
            <text>
              This is just an example for showing that this is a backgrounds.~{'\n'}
              This is {typeName} type and name of the file is {curFileName}
            </text>
          </div>
        </div>
      )}

      {curFileName === 'outer_space' && (
        <div>
          <video className='videoTag' autoPlay loop>
            <source src={second_video} type='video/mp4' />
          </video>
          <div class='content'>
            <h1>Heading</h1>
            <text>
              This is just an example for showing that this is a backgrounds.~{'\n'}
              This is {typeName} type and name of the file is {curFileName}
            </text>
          </div>
        </div>
      )}
      {curFileName === 'superhero_yeti' && (
        <div>
          <video className='videoTag' autoPlay loop>
            <source src={superhero_yeti} type='video/mp4' />
          </video>
          <div class='content'>
            <h1>Heading</h1>
            <text>
              This is just an example for showing that this is a backgrounds.~{'\n'}
              This is {typeName} type and name of the file is {curFileName}
            </text>
          </div>
        </div>
      )}

      {curFileName === 'toboggan' && (
        <div className='toboggan App-header'>
          <h1 id='write'>
            {' '}
            File Type: {typeName} and File Name:{curFileName}
          </h1>
          <div class='content'>
            <h1>Heading</h1>
            <text>
              This is just an example for showing that this is a backgrounds.~{'\n'}
              This is {typeName} type and name of the file is {curFileName}
            </text>
          </div>
        </div>
      )}

      {curFileName === 'yeti_village' && (
        <div className='yeti_village App-header'>
          <h1 id='write'>
            {' '}
            File Type: {typeName} and File Name:{curFileName}
          </h1>
          <div class='content'>
            <h1>Heading</h1>
            <text>
              This is just an example for showing that this is a backgrounds.~{'\n'}
              This is {typeName} type and name of the file is {curFileName}
            </text>
          </div>
        </div>
      )}
    </div>
  );
}
export default Bgcolor;
