import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ScrollToTop } from './components/layout/ScrollToTop';
import { SEOHead } from './components/layout/SEOHead';
import { Navbar } from './components/salon/Navbar';
import { Footer } from './components/salon/Footer';
import { FloatingActions } from './components/salon/FloatingActions';
import { LoadingScreen } from './components/common/LoadingScreen';

import type { SalonService, ServicePackage } from './types/salon';

// Code-split pages on demand using React.lazy
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const BridalPage = lazy(() => import('./pages/BridalPage').then((m) => ({ default: m.BridalPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Code-split heavy interactive booking modal
const BookingModal = lazy(() =>
  import('./components/salon/BookingModal').then((m) => ({ default: m.BookingModal }))
);

// High-performance, zero-layout-shift Suspense fallback with Style Hub luxury aesthetic
const PageFallback = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-12">
    <div className="w-10 h-10 rounded-full border-2 border-[#C5A059]/25 border-t-[#C5A059] animate-spin shadow-sm" />
    <span className="mt-4 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-[#9B783E]">
      Loading Luxury Experience...
    </span>
  </div>
);

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SalonService | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  // Initialize Lenis smooth scroll asynchronously after initial mount to avoid main-thread blocking
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lenisInstance: any = null;
    let rafId: number | null = null;
    let isMounted = true;

    import('lenis')
      .then(({ default: LenisClass }) => {
        if (!isMounted) return;
        try {
          lenisInstance = new LenisClass({
            duration: 1.1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.5,
            infinite: false,
          });

          (window as any).lenis = lenisInstance;

          const raf = (time: number) => {
            lenisInstance?.raf(time);
            rafId = requestAnimationFrame(raf);
          };

          rafId = requestAnimationFrame(raf);
        } catch {
          // Graceful fallback to browser scroll
        }
      })
      .catch(() => {
        // Fallback
      });

    return () => {
      isMounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      (window as any).lenis = null;
      lenisInstance?.destroy?.();
    };
  }, []);

  // Memoized handlers to maintain reference stability across re-renders
  const handleOpenBooking = useCallback(() => {
    setSelectedService(null);
    setSelectedPackage(null);
    setBookingModalOpen(true);
  }, []);

  const handleSelectServiceForBooking = useCallback((service: SalonService) => {
    setSelectedPackage(null);
    setSelectedService(service);
    setBookingModalOpen(true);
  }, []);

  const handleSelectPackageForBooking = useCallback((pkg: ServicePackage) => {
    setSelectedService(null);
    setSelectedPackage(pkg);
    setBookingModalOpen(true);
  }, []);

  const handleCloseBooking = useCallback(() => {
    setBookingModalOpen(false);
    setSelectedService(null);
    setSelectedPackage(null);
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Premium Minimalist Loading Screen with Pure Black Background and Centered Logo */}
      <LoadingScreen />

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Synchronize document title and meta descriptions on route navigation */}
      <SEOHead />

      <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#1E1F24] selection:bg-[#C5A059] selection:text-white antialiased overflow-x-hidden">
        {/* Sticky Glassmorphic Navbar with Router NavLinks */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Routed Content with Code-Split Suspense Boundary */}
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenBooking={handleOpenBooking}
                    onSelectService={handleSelectServiceForBooking}
                    onSelectPackage={handleSelectPackageForBooking}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <ServicesPage
                    onSelectServiceForBooking={handleSelectServiceForBooking}
                  />
                }
              />
              <Route
                path="/bridal"
                element={
                  <BridalPage
                    onOpenBooking={handleOpenBooking}
                    onSelectPackage={handleSelectPackageForBooking}
                  />
                }
              />
              <Route
                path="/gallery"
                element={<GalleryPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/about"
                element={<AboutPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenBooking={handleOpenBooking} />}
              />
              {/* Redirects for removed routes */}
              <Route path="/packages" element={<Navigate to="/services" replace />} />
              <Route path="/reviews" element={<Navigate to="/about" replace />} />
              {/* 404 Catch-All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer with Multi-Page Navigation */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Floating Actions (WhatsApp + Quick Call + Back to Top) */}
        <FloatingActions />

        {/* Interactive Booking Modal accessible on demand */}
        {bookingModalOpen && (
          <Suspense fallback={null}>
            <BookingModal
              isOpen={bookingModalOpen}
              onClose={handleCloseBooking}
              preSelectedService={selectedService}
              preSelectedPackage={selectedPackage}
            />
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
