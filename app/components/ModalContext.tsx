"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ModalContextType {
  farmerModalOpen: boolean;
  investorModalOpen: boolean;
  offTakerModalOpen: boolean;
  partnerSelectionModalOpen: boolean;
  openFarmerModal: () => void;
  closeFarmerModal: () => void;
  openInvestorModal: () => void;
  closeInvestorModal: () => void;
  openOffTakerModal: () => void;
  closeOffTakerModal: () => void;
  openPartnerSelectionModal: () => void;
  closePartnerSelectionModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [farmerModalOpen, setFarmerModalOpen] = useState(false);
  const [investorModalOpen, setInvestorModalOpen] = useState(false);
  const [offTakerModalOpen, setOffTakerModalOpen] = useState(false);
  const [partnerSelectionModalOpen, setPartnerSelectionModalOpen] = useState(false);

  const openFarmerModal = useCallback(() => setFarmerModalOpen(true), []);
  const closeFarmerModal = useCallback(() => setFarmerModalOpen(false), []);
  const openInvestorModal = useCallback(() => setInvestorModalOpen(true), []);
  const closeInvestorModal = useCallback(() => setInvestorModalOpen(false), []);
  const openOffTakerModal = useCallback(() => setOffTakerModalOpen(true), []);
  const closeOffTakerModal = useCallback(() => setOffTakerModalOpen(false), []);
  const openPartnerSelectionModal = useCallback(() => setPartnerSelectionModalOpen(true), []);
  const closePartnerSelectionModal = useCallback(() => setPartnerSelectionModalOpen(false), []);

  return (
    <ModalContext.Provider
      value={{
        farmerModalOpen,
        investorModalOpen,
        offTakerModalOpen,
        partnerSelectionModalOpen,
        openFarmerModal,
        closeFarmerModal,
        openInvestorModal,
        closeInvestorModal,
        openOffTakerModal,
        closeOffTakerModal,
        openPartnerSelectionModal,
        closePartnerSelectionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
