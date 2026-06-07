import LoginModal from "../components/LoginModal";
import { useEffect } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getModalBackgroundLocation } from "../utils/modalBackground";

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const backgroundLocation = getModalBackgroundLocation(location)

  useEffect(() => {
    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleClose = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (backgroundLocation || (historyState?.idx ?? 0) > 0) {
      navigate(-1);
      return;
    }

    navigate("/");
  }

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/20 p-4 backdrop-blur-xl"
    >
      <LoginModal onClose={handleClose}></LoginModal>
    </div>
  );
}
