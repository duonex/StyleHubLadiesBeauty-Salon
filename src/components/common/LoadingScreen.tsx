import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  /** If provided, manually controls completion. Otherwise auto-completes once site initializes */
  isLoading?: boolean;
  /** Minimum duration in ms to ensure the premium animation is appreciated (default: 1200ms) */
  minDuration?: number;
  /** Callback fired once exit transition has finished and component unmounts */
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading: externalIsLoading,
  minDuration = 1200,
  onFinish,
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Remove initial static HTML preloader if present in DOM
  useEffect(() => {
    const staticPreloader = document.getElementById('app-preloader');
    if (staticPreloader) {
      staticPreloader.remove();
    }
  }, []);

  // Allow re-triggering the loading screen on demand (e.g. for preview or testing)
  useEffect(() => {
    const handleShowLoader = () => {
      setIsFinished(false);
      setIsExiting(false);
      setCycle((c) => c + 1);
    };
    window.addEventListener('stylehub:show-loader', handleShowLoader);
    (window as any).showLoadingScreen = handleShowLoader;
    return () => {
      window.removeEventListener('stylehub:show-loader', handleShowLoader);
      delete (window as any).showLoadingScreen;
    };
  }, []);

  // Initialize and smoothly fade out when page is ready
  useEffect(() => {
    let exitTimeout: ReturnType<typeof setTimeout>;
    let finishTimeout: ReturnType<typeof setTimeout>;
    let maxTimeout: ReturnType<typeof setTimeout>;
    let isMounted = true;

    const startExit = () => {
      if (!isMounted) return;
      setIsExiting(true);
      finishTimeout = setTimeout(() => {
        if (!isMounted) return;
        setIsFinished(true);
        onFinish?.();
      }, 750);
    };

    if (externalIsLoading !== undefined) {
      if (!externalIsLoading) {
        startExit();
      }
      return;
    }

    const startTime = Date.now();

    const triggerReady = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      exitTimeout = setTimeout(() => {
        startExit();
      }, remaining);
    };

    if (document.readyState === 'complete') {
      triggerReady();
    } else {
      const handleLoad = () => {
        triggerReady();
      };
      window.addEventListener('load', handleLoad, { once: true });

      // Safety timeout: Never keep the user waiting more than 2.5s even if an asset hangs
      maxTimeout = setTimeout(() => {
        startExit();
      }, 2500);

      return () => {
        isMounted = false;
        clearTimeout(exitTimeout);
        clearTimeout(finishTimeout);
        clearTimeout(maxTimeout);
        window.removeEventListener('load', handleLoad);
      };
    }

    return () => {
      isMounted = false;
      clearTimeout(exitTimeout);
      clearTimeout(finishTimeout);
      clearTimeout(maxTimeout);
    };
  }, [cycle, externalIsLoading, minDuration, onFinish]);

  if (isFinished) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Style Hub"
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-[#000000] select-none transition-opacity duration-750 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        backgroundColor: '#000000',
      }}
    >
      <style>{`
        @keyframes shLogoScaleEntrance {
          0% {
            opacity: 0;
            transform: scale(0.7);
            filter: drop-shadow(0 0 0px rgba(197, 160, 89, 0));
          }
          65% {
            opacity: 0.96;
            transform: scale(1.04);
            filter: drop-shadow(0 0 28px rgba(223, 192, 133, 0.7));
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 0 18px rgba(197, 160, 89, 0.45));
          }
        }
        @keyframes shLogoSizeBreath {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 16px rgba(197, 160, 89, 0.4)) drop-shadow(0 0 32px rgba(197, 160, 89, 0.15));
          }
          50% {
            transform: scale(1.09);
            filter: drop-shadow(0 0 30px rgba(223, 192, 133, 0.8)) drop-shadow(0 0 60px rgba(197, 160, 89, 0.35));
          }
        }
        @keyframes shAuraPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.12);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-loader-anim {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: drop-shadow(0 0 20px rgba(197, 160, 89, 0.5)) !important;
          }
        }
      `}</style>

      {/* Subtle soft gold ambient glow aura expanding in harmony with the logo */}
      <div
        className={`absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full pointer-events-none transition-all duration-750 ease-out ${
          isExiting ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, rgba(223, 192, 133, 0.08) 45%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'shAuraPulse 2.8s ease-in-out infinite',
        }}
      />

      {/* Centered Company Logo with prominent size increase animation & exit zoom bloom */}
      <div
        className={`relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 aspect-square pointer-events-none transition-transform duration-750 ease-out ${
          isExiting ? 'scale-[1.22]' : 'scale-100'
        }`}
      >
        <div
          className="sh-loader-anim w-full h-full flex items-center justify-center will-change-[transform,opacity,filter]"
          style={{
            animation:
              'shLogoScaleEntrance 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards, shLogoSizeBreath 2.8s ease-in-out 0.9s infinite',
          }}
        >
          <Logo
            className="w-full h-full object-contain"
            variant="gold"
          />
        </div>
      </div>
    </div>
  );
};

// Compact clean fallback for Suspense boundaries if imported
export const PageFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-label="Loading Page"
      className="w-full min-h-[60vh] flex items-center justify-center p-8 select-none"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Logo className="w-full h-full animate-pulse" variant="gold" />
      </div>
    </div>
  );
};

export default LoadingScreen;
