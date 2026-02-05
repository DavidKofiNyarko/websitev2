import OffTakerFormModal from '../../components/OffTakerFormModal';

export default function OfftakerFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <OffTakerFormModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  );
}
