import { useEffect } from "react";

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let descriptionEl: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      descriptionEl = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement | null;
      if (descriptionEl) {
        previousDescription = descriptionEl.getAttribute("content");
        descriptionEl.setAttribute("content", description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (descriptionEl && previousDescription !== null) {
        descriptionEl.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
