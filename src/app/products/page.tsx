import Link from 'next/link';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const smartCovers = products.filter(product => product.category === 'smart-cover');
  const smartToilets = products.filter(product => product.category === 'smart-toilet');

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        {/* Smart Covers Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Smart Covers</h2>
            <Button asChild variant="outline">
              <Link href="/products/smart-cover">View All Smart Covers</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartCovers.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div> {/* Placeholder for product image */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.status === 'in_stock' 
                        ? 'bg-green-100 text-green-800' 
                        : product.status === 'out_of_stock' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status === 'in_stock' 
                        ? 'In Stock' 
                        : product.status === 'out_of_stock' 
                          ? 'Out of Stock' 
                          : 'Coming Soon'}
                    </span>
                    <Button asChild variant={product.status === 'coming_soon' ? 'secondary' : 'default'}>
                      <Link href={`/products/smart-cover/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Smart Toilets Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Smart Toilets</h2>
            <Button asChild variant="outline">
              <Link href="/products/smart-toilet">View All Smart Toilets</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartToilets.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div> {/* Placeholder for product image */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.status === 'in_stock' 
                        ? 'bg-green-100 text-green-800' 
                        : product.status === 'out_of_stock' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status === 'in_stock' 
                        ? 'In Stock' 
                        : product.status === 'out_of_stock' 
                          ? 'Out of Stock' 
                          : 'Coming Soon'}
                    </span>
                    <Button asChild variant={product.status === 'coming_soon' ? 'secondary' : 'default'}>
                      <Link href={`/products/smart-toilet/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
