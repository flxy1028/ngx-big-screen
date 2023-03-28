export function observerDomResize(dom: HTMLElement, callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['class', 'style'],
    attributeOldValue: true,
  });

  return observer;
}
