// Google Business / Maps URLs for IWCT — update only this file if listing links change.
//
// Maps CID: from your Google Business Profile (same id as local.google.com/place?id=…).
// Per-review share URL (optional): in Google Maps, open the review → Share → copy link →
// paste into homepage review data as googleShareUrl. If omitted, links use the listing below.

/** Google Maps Customer ID for If Walls Could Talk LLC */
export const GOOGLE_MAPS_CID = '1253580841988385447';

/** Stable profile URL — opens your Maps listing (tap Reviews to see all). */
export const googleMapsProfileUrl = `https://www.google.com/maps?cid=${GOOGLE_MAPS_CID}`;

/** Embed URL for site footer / contact map iframes (no API key). */
export const googleMapsEmbedUrl = `https://maps.google.com/maps?q=cid:${GOOGLE_MAPS_CID}&output=embed`;

export type GoogleReviewLinkOptions = {
  /** Direct share link from Google Maps for one review; falls back to profile URL. */
  googleShareUrl?: string;
};

/** Resolves the best URL for a “read on Google” link. */
export function googleReviewHref(options?: GoogleReviewLinkOptions): string {
  const share = options?.googleShareUrl?.trim();
  return share || googleMapsProfileUrl;
}
