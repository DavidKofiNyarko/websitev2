import InvestmentFormModal from '../../components/InvestmentFormModal';

export default function InvestorFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto">
        <InvestmentFormModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  );
}
