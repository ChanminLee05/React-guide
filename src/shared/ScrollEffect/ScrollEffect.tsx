import {useEffect, useRef, useState} from 'react';

const ScrollEffect = (threshold: number = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observerRef.current?.disconnect();
                } else {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (targetRef.current) {
            observerRef.current.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current && observerRef.current) {
                observerRef.current.unobserve(targetRef.current);
            }
        };
    }, [threshold]);

    return { targetRef, isVisible };
};

export default ScrollEffect;
