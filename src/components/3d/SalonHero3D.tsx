import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Star, Rotate3d, Palette } from 'lucide-react';

interface SalonHero3DProps {
  className?: string;
  onExploreServices?: () => void;
}

type ColorTheme = 'rosegold' | 'gold' | 'blush';

export const SalonHero3D: React.FC<SalonHero3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState<ColorTheme>('rosegold');
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  // References to dynamic 3D elements for theme updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const liquidMaterialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const capMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 4.6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff7f0, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffecd2, 2.5);
    mainKeyLight.position.set(4, 6, 5);
    scene.add(mainKeyLight);

    const rimLight = new THREE.DirectionalLight(0xffb8c6, 2.0);
    rimLight.position.set(-5, 3, -3);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0xd4af37, 2.2, 10);
    bottomGlow.position.set(0, -1.8, 1);
    scene.add(bottomGlow);
    lightRef.current = bottomGlow;

    // 3. Materials
    const goldCapMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.18,
    });
    capMaterialRef.current = goldCapMaterial;

    const outerGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      thickness: 0.8,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    const liquidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe08b98, // Rose gold liquid
      roughness: 0.15,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
      ior: 1.33,
    });
    liquidMaterialRef.current = liquidMaterial;

    // 4. Build 3D Luxury Flacon Group
    const flaconGroup = new THREE.Group();

    // Bottle Glass Body (Rounded cylinder)
    const bottleGeom = new THREE.CylinderGeometry(0.72, 0.72, 2.2, 48, 1);
    const bottleMesh = new THREE.Mesh(bottleGeom, outerGlassMaterial);
    bottleMesh.position.y = 0;
    flaconGroup.add(bottleMesh);

    // Bottle Base Chamfer
    const baseGeom = new THREE.CylinderGeometry(0.72, 0.66, 0.2, 48);
    const baseMesh = new THREE.Mesh(baseGeom, outerGlassMaterial);
    baseMesh.position.y = -1.15;
    flaconGroup.add(baseMesh);

    // Internal Glowing Beauty Liquid
    const liquidGeom = new THREE.CylinderGeometry(0.64, 0.64, 1.8, 40);
    const liquidMesh = new THREE.Mesh(liquidGeom, liquidMaterial);
    liquidMesh.position.y = -0.15;
    flaconGroup.add(liquidMesh);

    // Glass Shoulder Slope
    const shoulderGeom = new THREE.ConeGeometry(0.72, 0.45, 48);
    const shoulderMesh = new THREE.Mesh(shoulderGeom, outerGlassMaterial);
    shoulderMesh.position.y = 1.25;
    flaconGroup.add(shoulderMesh);

    // Gold Collar
    const collarGeom = new THREE.CylinderGeometry(0.38, 0.38, 0.35, 40);
    const collarMesh = new THREE.Mesh(collarGeom, goldCapMaterial);
    collarMesh.position.y = 1.55;
    flaconGroup.add(collarMesh);

    // Gold Pump Head
    const pumpGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 40);
    const pumpMesh = new THREE.Mesh(pumpGeom, goldCapMaterial);
    pumpMesh.position.y = 1.95;
    flaconGroup.add(pumpMesh);

    // Pump Nozzle
    const nozzleGeom = new THREE.BoxGeometry(0.12, 0.1, 0.35);
    const nozzleMesh = new THREE.Mesh(nozzleGeom, goldCapMaterial);
    nozzleMesh.position.set(0, 1.95, 0.22);
    flaconGroup.add(nozzleMesh);

    // Dip Tube
    const tubeGeom = new THREE.CylinderGeometry(0.04, 0.04, 2.0, 16);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.65,
      roughness: 0.2
    });
    const tubeMesh = new THREE.Mesh(tubeGeom, tubeMat);
    tubeMesh.position.y = 0.2;
    flaconGroup.add(tubeMesh);

    // Embossed Emblem Ring
    const ringGeom = new THREE.TorusGeometry(0.73, 0.03, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeom, goldCapMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.5;
    flaconGroup.add(ringMesh);

    scene.add(flaconGroup);

    // 5. Floating Glowing Pearls & Golden Droplets
    const pearlsGroup = new THREE.Group();
    const pearlGeom = new THREE.SphereGeometry(0.12, 24, 24);
    const pearlMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe6b3,
      metalness: 0.85,
      roughness: 0.12,
    });

    const pearlData: { mesh: THREE.Mesh; speed: number; rad: number; angle: number; yBase: number }[] = [];
    const numPearls = 7;
    for (let i = 0; i < numPearls; i++) {
      const pMesh = new THREE.Mesh(pearlGeom, pearlMaterial);
      const rad = 1.2 + Math.random() * 0.9;
      const angle = (i / numPearls) * Math.PI * 2;
      const yBase = (Math.random() - 0.5) * 2;
      const scale = 0.6 + Math.random() * 0.8;
      pMesh.scale.set(scale, scale, scale);
      pMesh.position.set(Math.cos(angle) * rad, yBase, Math.sin(angle) * rad);
      pearlsGroup.add(pMesh);
      pearlData.push({
        mesh: pMesh,
        speed: 0.4 + Math.random() * 0.5,
        rad,
        angle,
        yBase
      });
    }
    scene.add(pearlsGroup);

    // 6. Shimmering Golden Ambient Particle Cloud
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf3d290,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 7. Interactive Mouse / Touch Parallax & Orbit
    let targetRotationX = 0.1;
    let targetRotationY = -0.3;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        targetRotationY = -0.3 + mouseX * 0.8;
        targetRotationX = 0.1 - mouseY * 0.6;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 8. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 9. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating bob
      flaconGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08 - 0.15;
      
      // Auto continuous slow rotation when not actively dragging
      if (!isDragging) {
        targetRotationY += 0.0025;
      }

      // Smooth inertia interpolation
      flaconGroup.rotation.y += (targetRotationY - flaconGroup.rotation.y) * 0.06;
      flaconGroup.rotation.x += (targetRotationX - flaconGroup.rotation.x) * 0.06;

      // Orbiting Pearls
      pearlData.forEach((item) => {
        item.angle += item.speed * 0.015;
        item.mesh.position.x = Math.cos(item.angle) * item.rad;
        item.mesh.position.z = Math.sin(item.angle) * item.rad;
        item.mesh.position.y = item.yBase + Math.sin(elapsedTime * 2 + item.rad) * 0.12;
      });

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bottleGeom.dispose();
      liquidGeom.dispose();
      pumpGeom.dispose();
      collarGeom.dispose();
      outerGlassMaterial.dispose();
      liquidMaterial.dispose();
      goldCapMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  // Theme color switcher effect
  const handleThemeChange = (theme: ColorTheme) => {
    setActiveTheme(theme);
    if (!liquidMaterialRef.current || !capMaterialRef.current || !lightRef.current) return;

    if (theme === 'rosegold') {
      liquidMaterialRef.current.color.setHex(0xe08b98);
      capMaterialRef.current.color.setHex(0xd4af37);
      lightRef.current.color.setHex(0xd4af37);
    } else if (theme === 'gold') {
      liquidMaterialRef.current.color.setHex(0xe5b866);
      capMaterialRef.current.color.setHex(0xf5d77f);
      lightRef.current.color.setHex(0xffc247);
    } else if (theme === 'blush') {
      liquidMaterialRef.current.color.setHex(0xf2a7b5);
      capMaterialRef.current.color.setHex(0xc59b9b);
      lightRef.current.color.setHex(0xff8da1);
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[460px] md:min-h-[560px] flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      {hasWebGL ? (
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        />
      ) : (
        /* Graceful CSS 3D fallback for devices without WebGL */
        <div className="relative w-72 h-80 flex flex-col items-center justify-center">
          <div className="w-48 h-64 rounded-3xl bg-gradient-to-tr from-pink-200 via-amber-100 to-rose-200 shadow-2xl p-6 flex flex-col items-center justify-center border border-white/50 backdrop-blur-md animate-pulse">
            <Star className="w-12 h-12 text-[#C5A059] fill-[#C5A059]/30 mb-4" />
            <p className="font-serif text-lg text-[#1E1F24] font-semibold text-center">Style Hub 3D Essence</p>
            <p className="text-xs text-zinc-500 text-center mt-1">Luxury Beauty & Hair Care</p>
          </div>
        </div>
      )}

      {/* Floating 3D Badge Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Interactive Cue */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#C5A059]/25 shadow-sm text-xs font-medium text-[#1E1F24]">
          <Rotate3d className={`w-3.5 h-3.5 text-[#C5A059] ${isInteracting ? 'animate-spin' : ''}`} />
          <span>Interactive 3D · Drag to Rotate</span>
        </div>

        {/* Theme Shade Selector */}
        <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#C5A059]/25 shadow-sm">
          <Palette className="w-3.5 h-3.5 text-zinc-500 mr-1" />
          <button
            onClick={() => handleThemeChange('rosegold')}
            className={`w-4 h-4 rounded-full transition-transform ${activeTheme === 'rosegold' ? 'scale-125 ring-2 ring-[#C5A059]' : 'opacity-70 hover:opacity-100'}`}
            style={{ backgroundColor: '#E08B98' }}
            title="Rose Gold Essence"
          />
          <button
            onClick={() => handleThemeChange('gold')}
            className={`w-4 h-4 rounded-full transition-transform ${activeTheme === 'gold' ? 'scale-125 ring-2 ring-[#C5A059]' : 'opacity-70 hover:opacity-100'}`}
            style={{ backgroundColor: '#E5B866' }}
            title="Golden Radiance"
          />
          <button
            onClick={() => handleThemeChange('blush')}
            className={`w-4 h-4 rounded-full transition-transform ${activeTheme === 'blush' ? 'scale-125 ring-2 ring-[#C5A059]' : 'opacity-70 hover:opacity-100'}`}
            style={{ backgroundColor: '#F2A7B5' }}
            title="Blush Petal"
          />
        </div>
      </div>
    </div>
  );
};
