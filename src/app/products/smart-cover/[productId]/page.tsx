import Link from 'next/link';
import { getProductBySlug } from '@/data/products';
import { Button } from '@/components/ui/button';

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = getProductBySlug(params.productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-main">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-main">Products</Link>
          <span>/</span>
          <Link href="/products/smart-cover" className="hover:text-primary-main">Smart Covers</Link>
          <span>/</span>
          <span>{product.modelName}</span>
        </div>
        
        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Product Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-96 rounded-lg mb-4"></div> {/* Main image placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="bg-gray-300 h-24 rounded cursor-pointer hover:opacity-80"></div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.shortDescription}</p>
            
            {/* Product Status */}
            <div className="mb-6">
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
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full" 
                size="lg"
                disabled={product.status !== 'in_stock'}
              >
                Request Information
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
              >
                Download Specifications
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{product.fullDescription}</p>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
