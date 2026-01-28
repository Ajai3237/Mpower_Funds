import { useEffect } from "react";

const widgetMap = {
  us: "68870bb181758b18c73c09c2", // Default (US)
  ca: "68d1b928ab74b1dc7aae1697", // Canada
};

const ChatWidget = ({ countryCode = "us" }) => {
  useEffect(() => {
    const widgetId = widgetMap[countryCode.toLowerCase()] || widgetMap.us;

    // Remove old widget if exists (prevents duplicates on route change)
    document
      .querySelectorAll('script[src*="widgets.leadconnectorhq.com/loader.js"]')
      .forEach((s) => s.remove());
    document.querySelectorAll("chat-widget").forEach((w) => w.remove());

    // Create new script
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", widgetId);
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
      document.querySelectorAll("chat-widget").forEach((w) => w.remove());
    };
  }, [countryCode]);

  return null; // No visible UI, widget injects itself
};

export default ChatWidget;
