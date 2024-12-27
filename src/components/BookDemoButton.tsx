import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookDemoButtonProps {
  className?: string;
}

const BookDemoButton: React.FC<BookDemoButtonProps> = ({ className }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#7c3aed" },
          "dark": { "cal-brand": "#a78bfa" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="arjun-devireddy/30min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      Book A Demo
    </button>
  );
};

export default BookDemoButton;