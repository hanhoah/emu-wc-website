import Link from 'next/link';
import { getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';

export default function SmartCoverPage() {
  const products = getProductsByCategory('smart-cover');

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-main">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-main">Products</Link>
          <span>/</span>
          <span>Smart Covers</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">Smart Covers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our smart toilet covers offer premium features for comfort and hygiene. 
          Available in various models to suit different needs and preferences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div> {/* Placeholder for product image */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                
                {/* Feature highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <span className="text-primary-main mr-2">✓</span>
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
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
      </div>
    </div>
  );
}
