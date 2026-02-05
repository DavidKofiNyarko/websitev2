import FarmerFormModal from '../../components/FarmerFormModal';

export default function FarmerFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <FarmerFormModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  );
}
