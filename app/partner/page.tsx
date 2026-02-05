import PartnerCard from '../components/PartnerCard';
import { Users, Tractor, ShoppingCart } from 'lucide-react';

export default function PartnerSelectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner With Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to partner with AgriPath. Whether you're an investor looking to grow your portfolio,
            a farmer ready to scale your operations, or a buyer seeking quality produce, we have opportunities for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PartnerCard
            title="Investor"
            description="Invest in sustainable agriculture and earn returns while supporting local farmers."
            href="/partner/investor"
            icon={<Users className="w-8 h-8 text-green-600" />}
          />
          <PartnerCard
            title="Farmer"
            description="Join our network of outgrowers and access better markets, inputs, and support."
            href="/partner/farmer"
            icon={<Tractor className="w-8 h-8 text-green-600" />}
          />
          <PartnerCard
            title="Buyer"
            description="Connect with verified farmers and source quality produce for your business."
            href="/partner/offtaker"
            icon={<ShoppingCart className="w-8 h-8 text-green-600" />}
          />
        </div>
      </div>
    </div>
  );
}
