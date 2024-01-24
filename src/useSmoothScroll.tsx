import { useEffect } from 'react';

const useSmoothScroll = (): void => {
    useEffect(() => {
        const handleAnchorClick = (event: MouseEvent): void => {
            const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
            if (!anchor) return;

            const targetId = anchor.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    const navbarHeight = 80;
                    const targetPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = targetPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
};

export default useSmoothScroll;
