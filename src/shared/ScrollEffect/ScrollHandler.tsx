import {useEffect, useState} from 'react';

type ScrollCondition = (currentScrollY: number) => void;
const ScrollHandler = (conditions: ScrollCondition[]) => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
        let scrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            conditions.forEach(condition => {
                condition(currentScrollY);
            });

            if (currentScrollY > scrollY) {
                if (scrollDirection !== 'down') {
                    setScrollDirection('down');
                }
            } else if (currentScrollY < scrollY) {
                if (scrollDirection !== 'up') {
                setScrollDirection('up');
                }
            }
                scrollY = currentScrollY;
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [conditions, scrollDirection]);

    return scrollDirection;
};

export default ScrollHandler;