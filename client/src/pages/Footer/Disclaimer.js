import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Disclaimer</h1>
          <p className="text-lg text-gray-700">
            The information presented on Alpha Trade is provided for informational purposes only and should not be construed as financial or investment advice. While we strive to ensure the accuracy and reliability of the data displayed, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            In no event will Alpha Trade be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Through this website, you are able to link to other websites that are not under the control of Alpha Trade. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Every effort is made to keep the website up and running smoothly. However, Alpha Trade takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
