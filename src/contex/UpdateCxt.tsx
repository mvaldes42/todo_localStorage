import { createContext } from "react";

type UpdateCxtType = {
  needsUpdate: boolean | null;
  setNeedsUpdate: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const iUpdateState = {
  needsUpdate: null,
  setNeedsUpdate: () => {},
};

const UpdateCxt = createContext<UpdateCxtType>(iUpdateState);

export default UpdateCxt;
