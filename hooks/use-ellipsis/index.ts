import { useMemo, useState } from "react";

interface Options {
  maxLength: number;
}

const useEllipsis = (
  text: string,
  { maxLength }: Options = {
    maxLength: 200,
  }
) => {
  const ellipsed = maxLength <= text.length;
  const [showingMore, toggleShowingMore] = useState(false);

  const ellipsedText = useMemo(() => {
    if (!ellipsed) return text;

    const trimmedText = text.slice(0, maxLength);
    return trimmedText
      .slice(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")))
      .trim()
      .concat("...");
  }, [text, maxLength, ellipsed]);

  return {
    ellipsedText: showingMore ? text : ellipsedText,
    toggle: () => toggleShowingMore((previous) => !previous),
    showingMore,
    ellipsed,
  };
};

export default useEllipsis;
