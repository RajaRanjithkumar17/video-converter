import React from 'react'
import './description.css'

const Description = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm  my-2">
          <div className="col-4 text-center ">
            <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#3a3a3a">
              <path d="m146.67-800 76 154.67h126.66l-76-154.67h86l76 154.67H562L486-800h86l76 154.67h126.67l-76-154.67h114.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800Zm0 221.33v352h666.66v-352H146.67Zm0 0v352-352Z" />
            </svg>
          </div>
          <div className="col-8">
            <h3>High-Quality Conversions</h3>
            <p className="mb-0">
              Our easy-to-use video converter lets you convert videos online for free, while maintaining the original
              file's resolution and quality.
            </p>
          </div>
        </div>
        <div className="col-sm  my-2">
          <div className="col-4 text-center ">
            <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#3a3a3a">
              <path d="M128-160v-66.67h118.67l-14.67-14q-57.33-55.33-82-116-24.67-60.66-24.67-120 0-109.66 63.84-195.83Q253-758.67 356.67-790v69.33Q282-692 237-625.17q-45 66.84-45 148.5 0 49.67 17.33 94.84 17.34 45.16 57.34 82.5L290-278v-110.67h66.67V-160H128Zm705-342.67h-67q-3-45.66-20.5-85.33t-52.17-72.67L670-682v110.67h-66.67V-800H832v66.67H712.67l15.33 14q52.33 50.66 77 106.33t28 110.33ZM690.67-40l-7.34-52Q666-97.67 648.5-107.17t-29.83-21.5l-47.34 19.34L534.67-168l40.66-33.33q-4-20-4-36.34 0-16.33 4-36.33l-40.66-33.33 36.66-59.34 47.34 19.34Q631-358 648.5-367.83q17.5-9.84 34.83-15.5l7.34-52.67h66.66l8 52.67q17.34 5.66 34.84 15.66 17.5 10 29.83 21l47.33-20 36.67 60-40.67 33.34q4 19.33 4 36 0 16.66-4 36L914-168l-36.67 58.67L830-128.67q-12.33 12-29.83 21.5T765.33-92l-8 52h-66.66ZM724-143.33q40.33 0 67.5-27.17t27.17-67.5q0-40.33-27.17-67.5T724-332.67q-40.33 0-67.5 27.17T629.33-238q0 40.33 27.17 67.5t67.5 27.17Z" />
            </svg>
          </div>
          <div className="col-8">
            <h3>Popular Formats Supported</h3>
            <p className="mb-0">Convert your videos to MP4, MOV, or AVI without losing quality. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
