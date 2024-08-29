import { useLocation } from "react-router-dom";

export const useRoomId = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("id");
  return roomId ?? '';
};
