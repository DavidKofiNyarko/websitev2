"use client";

import FarmerFormModal from "./FarmerFormModal";
import OffTakerFormModal from "./OffTakerFormModal";
import InvestmentFormModal from "./InvestmentFormModal";
import PartnerSelectionModal from "./PartnerSelectionModal";
import { useModal } from "./ModalContext";

export default function ModalContainer() {
  const {
    farmerModalOpen,
    investorModalOpen,
    offTakerModalOpen,
    partnerSelectionModalOpen,
    openFarmerModal,
    openInvestorModal,
    openOffTakerModal,
    closeFarmerModal,
    closeInvestorModal,
    closeOffTakerModal,
    closePartnerSelectionModal,
  } = useModal();

  return (
    <>
      <PartnerSelectionModal
        isOpen={partnerSelectionModalOpen}
        onClose={closePartnerSelectionModal}
        onSelectFarmer={openFarmerModal}
        onSelectOffTaker={openOffTakerModal}
        onSelectInvestor={openInvestorModal}
      />
      <FarmerFormModal isOpen={farmerModalOpen} onClose={closeFarmerModal} />
      <OffTakerFormModal
        isOpen={offTakerModalOpen}
        onClose={closeOffTakerModal}
      />
      <InvestmentFormModal
        isOpen={investorModalOpen}
        onClose={closeInvestorModal}
      />
    </>
  );
}
