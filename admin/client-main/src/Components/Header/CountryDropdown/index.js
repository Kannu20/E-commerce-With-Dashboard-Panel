// import Button from '@mui/material/Button';

// const CountryDropDown = () => {
//     return (
//         <>
//             <Button className='countryDrop'>
//                 <div className='info d-flex flex-column'>
//                     <span>Your Location</span>
//                     <span></span>

//                 </div>
//             </Button>
//         </>
//     )
// }

// export default CountryDropDown;

import { Button } from 'bootstrap';
import React from 'react';

const CountryDropDown = () => {
  return (
    // <select>
    //   <option value="IN">India</option>
    //   <option value="US">United States</option>
    //   <option value="UK">United Kingdom</option>
    //   <option value="AU">Australia</option>
    // </select>
    <>
        <Button>
          <div className='countryDrop'>
              <span className='label'>Your Location</span>
          </div>
        </Button>
    </>
  );
};

export default CountryDropDown;
