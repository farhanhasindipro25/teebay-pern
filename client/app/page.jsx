import AllProductsCard from "./_libs/components/ui/cards/AllProductsCard";

export default function Home() {
  return (
    <div className="space-y-10">
      <h2 className="font-semibold text-xl text-gray-700 text-center">
        ALL PRODUCTS
      </h2>
      <AllProductsCard />
    </div>
  );
}
