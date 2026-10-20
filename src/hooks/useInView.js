import { useCallback, useEffect, useRef, useState } from 'react';

function useInView({ threshold = 0.3, once = false } = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);

                if (once && entry.isIntersecting) {
                    observer.unobserve(element);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, once]);

    return { ref, isInView };
}

function useInViewItems({ threshold = 0.3 } = {}) {
    const [visibleIndices, setVisibleIndices] = useState(() => new Set());
    const observerRef = useRef(null);
    const indexByElementRef = useRef(new WeakMap());

    const registerRef = useCallback(
        (element, index) => {
            if (!element) {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                    observerRef.current = null;
                    indexByElementRef.current = new WeakMap();
                }
                return;
            }

            if (!observerRef.current) {
                observerRef.current = new IntersectionObserver(
                    (entries) => {
                        setVisibleIndices((prev) => {
                            const next = new Set(prev);

                            entries.forEach((entry) => {
                                const itemIndex = indexByElementRef.current.get(entry.target);

                                if (itemIndex === undefined) return;

                                if (entry.isIntersecting) {
                                    next.add(itemIndex);
                                } else {
                                    next.delete(itemIndex);
                                }
                            });

                            return next;
                        });
                    },
                    { threshold }
                );
            }

            indexByElementRef.current.set(element, index);
            observerRef.current.observe(element);
        },
        [threshold]
    );

    useEffect(() => {
        return () => observerRef.current?.disconnect();
    }, []);

    return { registerRef, visibleIndices };
}

export { useInViewItems };
export default useInView;