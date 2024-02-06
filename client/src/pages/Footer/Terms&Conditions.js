import React from 'react';

const TermsNConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Terms and Conditions</h1>
          <p className="text-lg text-gray-700">
            By accessing and using the Alpha Trade website, you accept and agree to be bound by the following terms and conditions:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 mt-4 pl-4">
            <li>
              The content of this website is for general information purposes only. It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of [your country/region].
            </li>
          </ol>
          <p className="text-lg text-gray-700 mt-8">
            If you disagree with any part of these terms and conditions, please do not use our website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsNConditions;
