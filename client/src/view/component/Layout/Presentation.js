import { LOADING, LOADED, ERROR } from "../../../constants/StatusConstants";

const Presentation = ({
  status,
  loadedPresentation,
  loadingPresentation,
  errorPresentation,
}) => {
  switch (status) {
    case LOADING:
      return loadingPresentation;
    case LOADED:
      return loadedPresentation;
    case ERROR:
      return errorPresentation;
    default:
      return null;
  }
};

export default Presentation;
