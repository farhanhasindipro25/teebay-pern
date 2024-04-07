import React from "react";

export default function AllProductsCard() {
  return (
    <div className="p-6 bg-gray border-2 space-y-2 border-gray-300">
      <h2 className="text-xl font-semibold text-gray-800">iphone 14 pro max</h2>
      <p className="text-base font-semibold text-gray-500">
        Categories: Electronies
      </p>
      <p className="text-base font-semibold text-gray-500">Price: $1500</p>
      <p className="text-base font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
        cum quas sint, eum sunt. Nihil, cumque quisquam debitis molestiae
        aspernatur consectetur suscipit ducimus pariatur earum natus molestias
        ab facere, sed quae libero distinctio impedit? Delectus consectetur
        doloremque, consequatur sed minus, ab libero repellat omnis amet
        eligendi tenetur exercitationem dicta.
      </p>
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-gray-500">
          Date Posted: 21st Sept 2021
        </p>
        <p className="text-base font-semibold text-gray-500">
          1028376412 views
        </p>
      </div>
    </div>
  );
}
