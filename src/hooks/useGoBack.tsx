import { useNavigate } from "react-router-dom";

export function useGoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return handleGoBack;
}
