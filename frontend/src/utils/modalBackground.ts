import type { Location } from "react-router-dom";

type LocationWithBackground = Location & {
  state?: {
    backgroundLocation?: LocationWithBackground;
  } | null;
};

const modalPaths = new Set(["/login", "/register"]);

export function getModalBackgroundLocation(
  location: Location
): Location | undefined {
  const modalLocation = location as LocationWithBackground;

  if (!modalPaths.has(modalLocation.pathname)) {
    return undefined;
  }

  const candidate = modalLocation.state?.backgroundLocation;

  if (!candidate) {
    return undefined;
  }

  if (modalPaths.has(candidate.pathname)) {
    return getModalBackgroundLocation(candidate);
  }

  return candidate;
}

export function toModalBackgroundState(location: Location) {
  const backgroundLocation = modalPaths.has(location.pathname)
    ? getModalBackgroundLocation(location)
    : location;

  return backgroundLocation ? { backgroundLocation } : undefined;
}
