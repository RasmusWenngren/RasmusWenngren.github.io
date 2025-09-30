import { useEffect } from "react";

export default function DocumentHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  children,
}) {
  useEffect(() => {
    // Update document title if provided
    if (title) {
      document.title = title;
    }

    // Function to update meta tags
    const updateMetaTag = (selector, content) => {
      if (!content) return;

      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        const attributeName = selector.includes("property=")
          ? "property"
          : "name";
        const attributeValue = selector.match(/["'](.*?)["']/)[1];
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('meta[name="description"]', description);
    }

    // Mobile and PWA meta tags
    updateMetaTag(
      'meta[name="viewport"]',
      "width=device-width, initial-scale=1.0, viewport-fit=cover"
    );
    updateMetaTag('meta[name="theme-color"]', "#483737");
    updateMetaTag('meta[name="apple-mobile-web-app-capable"]', "yes");
    updateMetaTag(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
      "black-translucent"
    );
    updateMetaTag(
      'meta[name="apple-mobile-web-app-title"]',
      title || "Rasmus Wenngren Portfolio"
    );
    updateMetaTag('meta[name="mobile-web-app-capable"]', "yes");

    // Open Graph meta tags
    if (ogTitle) {
      updateMetaTag('meta[property="og:title"]', ogTitle);
    }

    if (ogDescription) {
      updateMetaTag('meta[property="og:description"]', ogDescription);
    }

    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
    }

    if (ogUrl) {
      updateMetaTag('meta[property="og:url"]', ogUrl);
    }

    updateMetaTag('meta[property="og:type"]', ogType);

    // Twitter Card meta tags
    updateMetaTag('meta[name="twitter:card"]', "summary_large_image");
    if (ogTitle) updateMetaTag('meta[name="twitter:title"]', ogTitle);
    if (ogDescription)
      updateMetaTag('meta[name="twitter:description"]', ogDescription);
    if (ogImage) updateMetaTag('meta[name="twitter:image"]', ogImage);

    // Add manifest link
    let manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) {
      manifestLink = document.createElement("link");
      manifestLink.setAttribute("rel", "manifest");
      manifestLink.setAttribute("href", "/manifest.json");
      document.head.appendChild(manifestLink);
    }

    // Add apple touch icon
    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement("link");
      appleIcon.setAttribute("rel", "apple-touch-icon");
      appleIcon.setAttribute("href", "/icons/icon-192x192.png");
      document.head.appendChild(appleIcon);
    }

    // Cleanup function for component unmount (optional)
    return () => {
      // We typically don't remove meta tags on unmount as they should persist
    };
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, ogType]);

  // This component doesn't render anything visible
  return children || null;
}
